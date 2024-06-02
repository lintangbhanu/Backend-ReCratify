const bcrypt = require('bcrypt');
const Joi = require('joi');
const users = require('../../models/usersModels');
const generateToken = require('../../services/tokenServices');

async function loginUserHandler(request, h) {

    const schema = Joi.object({
        username: Joi.string().alphanum().min(3).max(30).required()
            .messages({
                'string.min': 'Username harus memiliki panjang minimal {#limit} karakter!',
                'string.max': 'Username tidak boleh lebih dari {#limit} karakter!',
                'any.required': 'Username harus diisi!'
            }),
        password: Joi.string().min(6).required()
            .messages({
                'string.min': 'Password harus memiliki panjang minimal {#limit} karakter!',
                'any.required': 'Password harus diisi'
            })
    });

    const { error } = schema.validate(request.payload);

    if (error) {
        return h.response({
            error: true,
            message: error.details[0].message
        }).code(400);
    }

    const { username, password } = request.payload;

    try {
        // Cari user berdasarkan username
        const user = await users.findOne({ where: { username } });

        // Jika user tidak ditemukan
        if (!user) {
            return h.response({
                error: true,
                message: 'Username atau password salah'
            }).code(401);
        }

        // Verifikasi password
        const passwordMatch = await bcrypt.compare(password, user.password);

        // Jika password tidak cocok
        if (!passwordMatch) {
            return h.response({
                error: true,
                message: 'Username atau password salah'
            }).code(401);
        }

        // Generate token
        const token = generateToken({ id: user.userId, name: user.name });

        // Mengembalikan respons dengan token
        return h.response({
            error: false,
            message: 'Login berhasil',
            loginResult: {
                userId: user.userId,
                name: user.name,
                token
            }
        }).code(200);

    } catch (error) {
        console.error('Error logging in user:', error);
        return h.response({ status: 'error', message: error.message }).code(500);
    }

}

module.exports = { loginUserHandler };
