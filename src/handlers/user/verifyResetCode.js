const Joi = require('joi');
const users = require('../../models/usersModels');

async function verifyResetCodeHandler(request, h) {
    const schema = Joi.object({
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: false } }).required()
            .messages({
                'string.email': 'Format email tidak valid!',
                'any.required': 'Email harus diisi!'
            }),
        resetCode: Joi.string().length(6).required()
            .messages({
                'string.length': 'Kode reset harus 6 digit angka!',
                'any.required': 'Kode reset harus diisi!'
            })
    });

    const { error } = schema.validate(request.payload);

    if (error) {
        return h.response({ 
            status: 'fail', 
            message: error.details[0].message 
        }).code(400);
    }

    const { email, resetCode } = request.payload;

    try {
        const user = await users.findOne({ where: { email } });

        if (!user) {
            return h.response({
                status: 'fail',
                message: 'User tidak ditemukan'
            }).code(404);
        }

        if (resetCode !== user.resetCode) {
            return h.response({
                status: 'fail',
                message: 'Kode reset tidak valid'
            }).code(400);
        }

        return h.response({
            status: 'success',
            message: 'Kode reset valid'
        }).code(200);

    } catch (error) {
        console.error('Error verifying reset code:', error);
        return h.response({ status: 'error', message: error.message }).code(500);
    }
}

module.exports = {  verifyResetCodeHandler };
