const jwt = require('jsonwebtoken');
const Blacklist = require('../../models/blacklistModels');

async function logoutUserHandler(request, h) {
    const token = request.headers['authorization'];

    if (!token) {
        return h.response({
            status: 'fail',
            message: 'Missing token in authorization header'
        }).code(400);
    }

    try {
        // Cek apakah token sudah ada dalam daftar hitam
        const blacklistedToken = await Blacklist.findOne({ where: { token } });

        if (blacklistedToken) {
            // Token sudah ada dalam daftar hitam, kembalikan respons berhasil logout
            return h.response({
                status: 'success',
                message: 'Logout successful'
            }).code(200);
        }

        // Tetapkan tanggal kadaluwarsa sebagai tanggal saat ini
        const expiresAt = new Date();

        // Tambahkan token ke dalam daftar hitam dengan tanggal kadaluwarsa saat ini
        await Blacklist.create({ token, expiresAt });
        console.log('Token added to blacklist with current date as expiration.');

        // Kembalikan respons berhasil logout
        return h.response({
            status: 'success',
            message: 'Logout successful'
        }).code(200);

    } catch (error) {
        console.error('Error during logout:', error);
        return h.response({
            status: 'fail',
            message: 'Error occurred during logout'
        }).code(500);
    }
}

module.exports = {logoutUserHandler};