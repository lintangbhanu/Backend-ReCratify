const Joi = require('joi');
const users = require('../../models/usersModels');
const registerUser = require('../../services/userServices');
const { sendRegisterEmail } = require('../../services/emailServices');

async function registerUserHandler(request, h) {
    // Validasi data payload
    const schema = Joi.object({
        username: Joi.string().alphanum().min(3).max(30).required()
            .messages({
                'string.min': 'Username harus memiliki panjang minimal {#limit} karakter!',
                'string.max': 'Username tidak boleh lebih dari {#limit} karakter!',
                'any.required': 'Username harus diisi!'
            }),
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: false } }).required()
            .messages({
                'string.email': 'Format email tidak valid!',
                'any.required': 'Email harus diisi!'
            }),
        password: Joi.string().min(6).required()
            .messages({
                'string.min': 'Password harus memiliki panjang minimal {#limit} karakter!',
                'any.required': 'Password harus diisi'
            }),
        verifyPassword: Joi.valid(Joi.ref('password')).required()
            .messages({
                'any.only': 'Password tidak cocok!'
            })
    });

    const { error } = schema.validate(request.payload);

    if (error) {
        return h.response({ 
            status: 'fail', 
            message: error.details[0].message 
        }).code(400);
    }

    const { username, email, password } = request.payload;

    try {
        // cek apakah username sudah ada
        const existingUser = await users.findOne({ where: { username } });

        if (existingUser) {
            return h.response({
                status: 'fail',
                message: 'Username sudah terdaftar!'
            }).code(400);
        }

        // cek apakah email sudah terdaftar
        const existingEmail = await users.findOne({ where: { email } });
        
        if (existingEmail) {
            return h.response({
                status: 'fail',
                message: 'Email sudah terdaftar!'
            }).code(400);
        }

        const registerData = await registerUser(username, email, password);

        // cek apakah registrasi berhasil
        if (registerData) {
            await sendRegisterEmail(email);
            return h.response({
                status: 'success',
                message: 'Registrasi berhasil dilakukan!'
            }).code(200);
        } else {
            return h.response({
                status: 'fail',
                message: 'Registrasi gagal dilakukan!'
            }).code(400);
        }
    } catch (error) {
        console.error('Error registering user:', error);
        return h.response({ status: 'error', message: error.message }).code(500);
    }
}

module.exports = {registerUserHandler};
