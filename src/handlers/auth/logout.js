const Blacklist = require('../../models/blacklistModels');

async function logoutUserHandler(request, h) {
    try {
        return h.response({
            status: 'success',
            message: 'Logout berhasil'
        }).code(200);
    } catch (error) {
        console.error('Error logging out user:', error);
        return h.response({ status: 'error', message: error.message }).code(500);
    }
}

module.exports = { logoutUserHandler };
