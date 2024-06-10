const Joi = require('joi');
const users = require('../../models/usersModels');

async function verifyResetCodeHandler(request, h) {
    const schema = Joi.object({
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: false } }).required()
            .messages({
                'string.email': 'Email invalid!',
                'any.required': 'Email required!'
            }),
        resetCode: Joi.string().length(6).required()
            .messages({
                'string.length': 'The reset code must be a 6 digit number!',
                'any.required': 'Reset code required'
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
                message: 'User not found'
            }).code(404);
        }

        if (resetCode !== user.resetCode) {
            return h.response({
                status: 'fail',
                message: 'Reset code invalid'
            }).code(400);
        }

        return h.response({
            status: 'success',
            message: 'Reset code valid'
        }).code(200);

    } catch (error) {
        console.error('Error verifying reset code:', error);
        return h.response({ status: 'error', message: error.message }).code(500);
    }
}

module.exports = {  verifyResetCodeHandler };
