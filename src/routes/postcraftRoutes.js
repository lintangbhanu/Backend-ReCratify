const getAllPostsHandler = require('../handlers/publish/allPosts');
const getPostsByUser = require('../handlers/publish/userPosts');
const deletePost = require('../handlers/publish/deletePosts');
const postingHandler = require('../handlers/publish/Posting');
const getPostDetail = require('../handlers/publish/detailPosts');


const postCraftRoutes = [
    {
        method: 'POST',
        path: '/upload',
        options: {
            payload: {
                output: 'stream',
                parse: true,
                multipart: true,
                maxBytes: 10 * 1024 * 1024,
            },
        },
        handler: postingHandler
    },
    {
        method: 'DELETE',
        path: '/deletepost',
        handler: deletePost
    },
    {
        method: 'GET',
        path: '/allpost',
        handler: getAllPostsHandler
    },
    {
        method: 'GET',
        path: '/userpost',
        handler: getPostsByUser
    },
    {
        method: 'GET',
        path: '/detailpost/{postId}',
        handler: getPostDetail
    }
];

module.exports = postCraftRoutes;
