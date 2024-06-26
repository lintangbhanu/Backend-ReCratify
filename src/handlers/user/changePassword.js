const bcrypt = require('bcrypt');
const Joi = require('joi');
const users = require('../../models/usersModels');
const verifyToken = require('../../middleware/authentication');

async function changePasswordHandler(request, h) {
    try {
        const userData = await verifyToken(request);
        if (!userData) {
            return h.response({
                status: 'fail',
                message: 'Invalid or missing token please re-login'
            }).code(401);
        }

        const { payload } = request;
        const userId = userData.id;

        const schema = Joi.object({
            oldPassword: Joi.string().required()
                .messages({
                    'string.empty': 'Old Password Required!',
                    'any.required': 'Old Password Required!'
                }),
            newPassword: Joi.string().min(6).required()
                .messages({
                    'string.min': 'The new password must have a minimum length of {#limit} characters!',
                    'any.required': 'New Password Required'
                }),
            confirmPassword: Joi.string().valid(Joi.ref('newPassword')).required()
                .messages({
                    'any.only': 'Password are not match!',
                    'any.required': 'Verify Password Required!'
                })
        });

        const { error } = schema.validate(request.payload);

        if (error) {
            return h.response({ 
                status: 'fail', 
                message: error.details[0].message 
            }).code(400);
        }

        const { oldPassword, newPassword } = payload;

        const user = await users.findOne({ where: { userId } });

        if (!user) {
            return h.response({
                status: 'fail',
                message: 'User not found'
            }).code(404);
        }

        const isOldPasswordCorrect = await bcrypt.compare(oldPassword, user.password);
        if (!isOldPasswordCorrect) {
            return h.response({
                status: 'fail',
                message: 'Password incorrect'
            }).code(400);
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);

        await user.update({ password: hashedPassword, resetCode: null });

        return h.response({
            status: 'success',
            message: 'Password changed successfully'
        }).code(200);

    } catch (error) {
        console.error('Error changing password:', error);
        return h.response({ status: 'error', message: error.message }).code(500);
    }
}

module.exports = { changePasswordHandler };
