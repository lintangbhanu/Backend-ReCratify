const bcrypt = require('bcrypt');
const Joi = require('joi');
const users = require('../../models/usersModels');

async function resetPasswordHandler(request, h) {
    const schema = Joi.object({
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: false } }).required()
            .messages({
                'string.email': 'Format email tidak valid!',
                'any.required': 'Email harus diisi!'
            }),
        newPassword: Joi.string().min(6).required()
            .messages({
                'string.min': 'Password harus memiliki panjang minimal {#limit} karakter!',
                'any.required': 'Password harus diisi!'
            }),
        resetCode: Joi.string().required()
            .messages({
                'any.required': 'Reset code harus diisi!'
            })
    });

    const { error } = schema.validate(request.payload);

    if (error) {
        return h.response({ 
            status: 'fail', 
            message: error.details[0].message 
        }).code(400);
    }

    const { email, newPassword, resetCode } = request.payload;

    try {
        const user = await users.findOne({ where: { email } });

        if (!user) {
            return h.response({
                status: 'fail',
                message: 'User tidak ditemukan'
            }).code(404);
        }

        if (user.resetCode !== resetCode) {
            return h.response({
                status: 'fail',
                message: 'Reset code tidak valid'
            }).code(400);
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);

        await user.update({ password: hashedPassword, resetCode: null });

        return h.response({
            status: 'success',
            message: 'Password berhasil direset'
        }).code(200);

    } catch (error) {
        console.error('Error resetting password:', error);
        return h.response({ status: 'error', message: error.message }).code(500);
    }
}

module.exports = { resetPasswordHandler };
