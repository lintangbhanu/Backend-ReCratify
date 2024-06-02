const jwt = require('jsonwebtoken');
const Blacklist = require('../../models/blacklistModels');

async function logoutUserHandler(request, h) {
    const token = request.headers.authorization;

    if (!token) {
        return h.response({
            status: 'fail',
            message: 'Token tidak ditemukan'
        }).code(400);
    }

    try {
        // Decode token to get expiration time
        const decodedToken = jwt.decode(token);
        const expiresAt = new Date(decodedToken.exp * 1000);

        // Add token to blacklist
        await Blacklist.create({ token, expiresAt });

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
