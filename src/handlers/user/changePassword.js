const bcrypt = require('bcrypt');
const Joi = require('joi');
const users = require('../../models/usersModels');
const verifyToken = require('../../middleware/authentication');


async function changePasswordHandler(request, h) {
    const userData = await verifyToken(request);
    if (!userData) {
        return h.response({
            status: 'fail',
            message: 'Invalid or missing token'
        }).code(401);
    }

    const schema = Joi.object({
        userId: Joi.string().required()
            .messages({
                'string.empty': 'ID user harus diisi!',
                'any.required': 'ID user harus diisi!'
            }),
        oldPassword: Joi.string().required()
            .messages({
                'string.empty': 'Password lama harus diisi!',
                'any.required': 'Password lama harus diisi!'
            }),
        newPassword: Joi.string().min(6).required()
            .messages({
                'string.min': 'Password baru harus memiliki panjang minimal {#limit} karakter!',
                'any.required': 'Password baru harus diisi!'
            }),
        confirmPassword: Joi.string().valid(Joi.ref('newPassword')).required()
            .messages({
                'any.only': 'Konfirmasi password baru tidak cocok dengan password baru!',
                'any.required': 'Konfirmasi password baru harus diisi!'
            })
    });

    const { error } = schema.validate(request.payload);

    if (error) {
        return h.response({ 
            status: 'fail', 
            message: error.details[0].message 
        }).code(400);
    }

    const { userId, oldPassword, newPassword } = request.payload;

    try {
        const user = await users.findOne({ where: { userId } });

        if (!user) {
            return h.response({
                status: 'fail',
                message: 'User tidak ditemukan'
            }).code(404);
        }

        const isOldPasswordCorrect = await bcrypt.compare(oldPassword, user.password);
        if (!isOldPasswordCorrect) {
            return h.response({
                status: 'fail',
                message: 'Password lama salah'
            }).code(400);
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);

        await user.update({ password: hashedPassword, resetCode: null });

        return h.response({
            status: 'success',
            message: 'Password berhasil diubah'
        }).code(200);

    } catch (error) {
        console.error('Error changing password:', error);
        return h.response({ status: 'error', message: error.message }).code(500);
    }
}

module.exports = { changePasswordHandler };