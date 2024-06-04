const { bucket } = require('../../config/bucketconf');
const { URL } = require('url');
const deletePostCraft = require('../../services/postcraftServices');
const jwt = require('jsonwebtoken');
const Blacklist = require('../../models/blacklistModels');

async function deletePost(request, h) {
    const token = request.headers.authorization;

    if (!token) {
        return h.response({
            status: 'fail',
            message: 'Token tidak ditemukan'
        }).code(400);
    }

    const { postId, URL_Image } = request.payload;

    // file url
    const parsedUrl = new URL(URL_Image);
    const pathParts = parsedUrl.pathname.split('/').filter(part => part.length > 0);
    const objectName = decodeURIComponent(pathParts.slice(1).join('/'));
    const file = bucket.file(objectName);

    try {
        // delete post data from postCraft
        const queryDestroy = await deletePostCraft(postId);

        // validation
        if (queryDestroy.length === 0) {
            return h.response({
                status: 'fail',
                message: 'Failed to delete post craft!'
            }).code(400);
        }

        // delete image object from bucket
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