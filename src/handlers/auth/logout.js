const users = require('../../models/usersModels');

async function logoutUserHandler(request, h) {
    try {
        // Dapatkan userId dari permintaan
        const { userId } = request.payload;

        // Lakukan pengecekan apakah pengguna dengan userId yang diberikan ada di database
        const user = await users.findOne({ where: { userId } });

        if (!user) {
            return h.response({
                error: true,
                message: 'Pengguna tidak ditemukan'
            }).code(404);
        }

        // Lakukan proses logout di sini, misalnya, menandai pengguna sebagai tidak aktif
        // Misalnya:
        // await users.update({ loggedIn: false }, { where: { userId } });

        return h.response({
            error: false,
            message: `Selamat tinggal ${user.username}`
        }).code(200);
    } catch (error) {
        console.error('Error logging out user:', error);
        return h.response({ status: 'error', message: error.message }).code(500);
    }
}

module.exports = { logoutUserHandler };
