const Joi = require('joi');
const users = require('../../models/usersModels');
const { sendResetEmail } = require('../../services/emailServices');

async function forgotPasswordHandler(request, h) {
    const schema = Joi.object({
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: false } }).required()
            .messages({
                'string.email': 'Format email tidak valid!',
                'any.required': 'Email harus diisi!'
            })
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
        const user = await users.findOne({ where: { email } });

        if (!user) {
            return h.response({
                status: 'fail',
                message: 'Email tidak terdaftar!'
            }).code(404);
        }

        // Generate reset code
        const resetCode = Math.floor(100000 + Math.random() * 900000).toString();
        

        // Set expiration time
        const expirationTime = new Date(Date.now() + 3600000);

        // Update user in the database
        await user.update({ resetCode, resetCodeExpiration: expirationTime });

        // Send reset email
        await sendResetEmail(user.email, resetCode);

        return h.response({
            status: 'success',
            message: 'Kode reset telah dikirim ke email Anda.'
        }).code(200);

    } catch (error) {
        console.error('Error sending reset email:', error);
        return h.response({ status: 'error', message: error.message }).code(500);
    }
}

module.exports = { forgotPasswordHandler };
