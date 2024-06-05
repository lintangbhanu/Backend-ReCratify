const postCraft = require('../../models/postcraftModels');
const users = require('../../models/usersModels');
const verifyToken = require ('../../middleware/authentication')

async function getPostsByUser(request, h) {
    const userData = await verifyToken(request);
    if (!userData) {
        return h.response({
            status: 'fail',
            message: 'Invalid or missing token'
        }).code(401);
    }
    
    const { userId } = request.params;

    try {
        const postsByUser = await postCraft.findAll({
            include: {
                model: users,
                attributes: ['username']
            },
            where: {
                userId: userId
            }
        });

        const username = postsByUser[0].usersTable.username;

        const result = postsByUser.map(data => {
            return {
                postId: data.postId,
                title: data.title,
                URL_Image: data.URL_Image,
                description: data.description,
                createdAt: data.created_at,
            }
        });

        return h.response({
            status: 'success',
            message: `Successfully get craft posts by user: ${username}!`,
            userId: userId,
            data: result
        }).code(200);
    } catch (error) {
        return h.response({
            status: 'fail',
            message: error.message
        }).code(500);
    }
}

module.exports = getPostsByUser