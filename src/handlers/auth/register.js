const Joi = require('joi');
const users = require('../../models/usersModels');
const registerUser = require('../../services/userServices');
const { sendRegisterEmail } = require('../../services/emailServices');

async function registerUserHandler(request, h) {

    const schema = Joi.object({
        username: Joi.string().pattern(new RegExp('^[a-zA-Z0-9 ]*$')).min(3).max(30).required()
            .messages({
                'string.pattern.base': 'Username must only contain letters, numbers and spaces!',
                'string.min': 'Username must be at least {#limit} characters long!',
                'string.max': 'Username cannot be more than {#limit} characters!',
                'any.required': 'Username is required!'
            }),
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: false } }).required()
            .messages({
                'string.email': 'Invalid email format!',
                'any.required': 'Email required!'
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
            status: 'fail', 
            message: error.details[0].message 
        }).code(400);
    }

    const { username, email, password } = request.payload;

    try {
        const existingUser = await users.findOne({ where: { username } });

        if (existingUser) {
            return h.response({
                status: 'fail',
                message: 'Username has been registered!'
            }).code(400);
        }

        const existingEmail = await users.findOne({ where: { email } });
        
        if (existingEmail) {
            return h.response({
                status: 'fail',
                message: 'Email is registered!'
            }).code(400);
        }

        const registerData = await registerUser(username, email, password);

        if (registerData) {
            await sendRegisterEmail(email);
            return h.response({
                status: 'success',
                message: 'Registration successful!'
            }).code(200);
        } else {
            return h.response({
                status: 'fail',
                message: 'Registration failed!'
            }).code(400);
        }
    } catch (error) {
        console.error('Error registering user:', error);
        return h.response({ status: 'error', message: error.message }).code(500);
    }
}

module.exports = { registerUserHandler };
