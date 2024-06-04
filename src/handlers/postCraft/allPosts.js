const postCraft = require('../../models/postcraftModels');
const users = require('../../models/usersModels');
const jwt = require('jsonwebtoken');
const Blacklist = require('../../models/blacklistModels');

async function getAllPosts(request, h) {
    const token = request.headers.authorization;

    if (!token) {
        return h.response({
            status: 'fail',
            message: 'Token tidak ditemukan'
        }).code(400);
    }

    try {
        const posts = await postCraft.findAll({
            include: {
                model: users,
                attributes: ['username']
            }
        });

        const result = posts.map(data => {
            return {
                postId: data.postId,
                userId: data.userId,
                title: data.title,
                URL_Image: data.URL_Image,
                description: data.description,
                createdAt: data.createdAt,
                updatedAt: data.updatedAt,
                User: {
                    username: data.usersTable.username
                }
            }
        });

        return h.response({
            status: 'success',
            message: 'Berhasil mengambil semua data postingan karya!',
            data: result
        }).code(200);
    } catch (error) {
        return h.response({
            status: 'fail',
            message: error.message
        }).code(500);
    }
}

module.exports = getAllPosts;