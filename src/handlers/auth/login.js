const bcrypt = require('bcrypt');
const Joi = require('joi');
const users = require('../../models/usersModels');
const generateToken = require('../../services/tokenServices');

async function loginUserHandler(request, h) {

    const schema = Joi.object({
        email: Joi.string().email().required()
            .messages({
                'string.email': 'Email must be a valid email address!',
                'any.required': 'Email require!'
            }),
        password: Joi.string().min(6).required()
            .messages({
                'string.min': 'Password must have a minimum length of {#limit} characters!',
                'any.required': 'Password required'
            })
    });

    const { error } = schema.validate(request.payload);

    if (error) {
        return h.response({
            error: true,
            message: error.details[0].message
        }).code(400);
    }

    const { email, password } = request.payload;

    try {
        const user = await users.findOne({ where: { email } });

        if (!user) {
            return h.response({
                error: true,
                message: 'Incorrect email or password'
            }).code(401);
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return h.response({
                error: true,
                message: 'Email atau password salah'
            }).code(401);
        }

        const token = generateToken({ id: user.userId, email: user.email });

        return h.response({
            error: false,
            message: 'Login berhasil',
            loginResult: {
                userId: user.userId,
                username: user.username,
                token
            }
        }).code(200);

    } catch (error) {
        console.error('Error logging in user:', error);
        return h.response({ status: 'error', message: error.message }).code(500);
    }

}

module.exports = { loginUserHandler };
