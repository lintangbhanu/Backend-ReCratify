const bcrypt = require('bcrypt');
const Joi = require('joi');
const users = require('../models/usersModels');
const crypto = require('crypto');
const registerUser = require('../services/usersServices');
const { sendResetEmail } = require('../services/emailServices'); // Replace 'your-email-service-file' with the actual filename


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
        const existingUser = await users.findOne({
            where: {
                username: username
            }
        });

        if (existingUser) {
            return h.response({
                status: 'fail',
                message: 'Username sudah terdaftar!'
            }).code(400);
        }

        // cek apakah email sudah terdaftar
        const existingEmail = await users.findOne({
            where: {
                email: email
            }
        });
        
        if (existingEmail) {
            return h.response({
                status: 'fail',
                message: 'Email sudah terdaftar!'
            }).code(400);
        }

        const registerData = await registerUser(username, email, password);

        // cek apakah registrasi berhasil
        if (registerData === true) {
            const response = h.response({
                status: 'success',
                message: 'Registrasi berhasil dilakukan!'
            });
            response.code(200);
            return response;
        } else {
            const response = h.response({
                status: 'fail',
                message: 'Registrasi gagal dilakukan!'
            });
            response.code(400);
            return response;
        }
    } catch (error) {
        return h.response({ Error: error.message }).code(400);
    }
}

async function loginUserHandler(request, h) {
    // Validasi data payload
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
            status: 'fail', 
            message: error.details[0].message 
        }).code(400);
    }

    const { username, password } = request.payload;

    try {
        // Cari user berdasarkan username
        const user = await users.findOne({
            where: {
                username: username
            }
        });

        // Jika user tidak ditemukan
        if (!user) {
            return h.response({
                status: 'fail',
                message: 'Username atau password salah'
            }).code(401);
        }

        // Verifikasi password
        const passwordMatch = await bcrypt.compare(password, user.password);

        // Jika password tidak cocok
        if (!passwordMatch) {
            return h.response({
                status: 'fail',
                message: 'Username atau password salah'
            }).code(401);
        }

        // Mengembalikan ID pengguna dalam respons
        return h.response({
            status: 'success',
            message: 'Login berhasil',
            userId: user.userId // Menggunakan userId dari model
        }).code(200);

    } catch (error) {
        return h.response({ Error: error.message }).code(400);
    }

    
}

async function forgotPasswordHandler(request, h) {
    // Validasi data payload (email)
    const schema = Joi.object({
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: false } }).required()
            .messages({
                'string.email': 'Format email tidak valid!',
                'any.required': 'Email harus diisi!'
            }),
    });

    const { error } = schema.validate(request.payload);

    if (error) {
        return h.response({ 
            status: 'fail', 
            message: error.details[0].message 
        }).code(400);
    }

    const { email } = request.payload;

    try {
        // Cek apakah email sudah terdaftar
        const existingEmail = await users.findOne({
            where: {
                email: email
            }
        });

        if (!existingEmail) {
            return h.response({
                status: 'fail',
                message: 'Email tidak terdaftar!'
            }).code(404);
        }

        // Dapatkan userId terkait dengan email
        const userId = existingEmail.userId;

        // Generate a random reset code (you can use any method you prefer)
        const resetCode = crypto.randomBytes(6).toString('hex'); // 6-digit hexadecimal code

        // Send the reset email
        await sendResetEmail(email, resetCode);

        return h.response({
            status: 'success',
            message: 'Reset code sent successfully.',
            resetcode: resetCode,
            userId: userId // Menambahkan userId dalam respons
        }).code(200);

    } catch (error) {
        console.error('Error sending reset email:', error);
        return h.response({ Error: error.message }).code(500);
    }
}

async function resetPasswordHandler(request, h) {
    const { userId, newPassword } = request.payload;

    try {
        // Cari user berdasarkan userId
        const user = await users.findOne({
            where: {
                userId: userId
            }
        });

        if (!user) {
            return h.response({
                status: 'fail',
                message: 'User not found'
            }).code(404);
        }

        // Hash password baru
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        // Update password user di database
        await user.update({ password: hashedPassword });

        return h.response({
            status: 'success',
            message: 'Password reset successfully.'
        }).code(200);

    } catch (error) {
        console.error('Error resetting password:', error);
        return h.response({ Error: error.message }).code(500);
    }
}


module.exports = { registerUserHandler, loginUserHandler, forgotPasswordHandler,resetPasswordHandler };
