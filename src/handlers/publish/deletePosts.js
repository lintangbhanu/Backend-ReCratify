const { bucket } = require('../../config/bucketconf');
const { URL } = require('url');
const verifyToken = require('../../middleware/authentication');
const { deletePostCraft } = require('../../services/postcraftServices');

async function deletePost(request, h) {
    const userData = await verifyToken(request);
    if (!userData) {
        return h.response({
            status: 'fail',
            message: 'Invalid or missing token please re-login'
        }).code(401);
    }

    const { postId, URL_Image } = request.payload;

    const parsedUrl = new URL(URL_Image);
    const pathParts = parsedUrl.pathname.split('/').filter(part => part.length > 0);
    const objectName = decodeURIComponent(pathParts.slice(1).join('/'));
    const file = bucket.file(objectName);

    try {
        const queryDestroy = await deletePostCraft(postId);

        if (queryDestroy.length === 0) {
            return h.response({
                status: 'fail',
                message: 'Failed to delete post craft!'
            }).code(400);
        }

        await file.delete();
        console.log(`Object '${objectName}' successfully deleted from bucket!`);

        return h.response({
            status: 'success',
            message: 'Craft Post deleted successfully!'
        }).code(201);
    } catch (error) {
        return h.response({
            status: 'fail',
            message: error.message
        }).code(500);
    }
}

module.exports = deletePost;