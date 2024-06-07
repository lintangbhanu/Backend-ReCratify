const usersModel = require('../../models/usersModels');

async function logoutUserHandler(request, h) {
    try {
        const userId = request.payload.userId;
        const user = await usersModel.getUserById(userId);

        if (!user) {
            return h.response({
                status: 'error',
                message: 'User not found'
            }).code(404);
        }

        const userName = user.username;


        return h.response({
            status: 'success',
            message: `Mau Kemana sih, ${userName}!`
        }).code(200);
    } catch (error) {
        console.error('Error logging out user:', error);
        return h.response({ status: 'error', message: error.message }).code(500);
    }
}

module.exports = { logoutUserHandler };
