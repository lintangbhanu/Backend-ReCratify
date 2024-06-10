const postCraft = require('../../models/postcraftModels');
const users = require('../../models/usersModels');
const verifyToken = require('../../middleware/authentication');

async function getPostDetail(request, h) {
    const userData = await verifyToken(request);
    if (!userData) {
        return h.response({
            status: 'fail',
            message: 'Invalid or missing token please re-login'
        }).code(401);
    }

    const postId = request.params.postId;

    try {
        const post = await postCraft.findOne({
            where: { postId },
            include: {
                model: users,
                attributes: ['username']
            }
        });

        if (!post) {
            return h.response({
                status: 'fail',
                message: 'Post not found'
            }).code(404);
        }

        const postData = {
            postId: post.postId,
            userId: post.userId,
            username: post.usersTable.username,
            title: post.title,
            URL_Image: post.URL_Image,
            description: post.description
        };

        return h.response({
            status: 'success',
            message: 'Successfully retrieved post details',
            data: postData
        }).code(200);
    } catch (error) {
        return h.response({
            status: 'fail',
            message: error.message
        }).code(500);
    }
}

module.exports = getPostDetail;
