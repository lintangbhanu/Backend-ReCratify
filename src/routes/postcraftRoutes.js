const getAllPostsHandler = require('../handlers/postCraft/allPosts');
const getPostsByUser = require('../handlers/postCraft/postsByUser');
const deletePost = require('../handlers/postCraft/deletePost');
const uploadHandler = require('../handlers/postCraft/uploadHandler');

const postCraftRoutes = [
    {
        method: 'POST',
        path: '/upload',
        options: {
            payload: {
                output: 'stream',
                parse: true,
                multipart: true,
                maxBytes: 10 * 1024 * 1024, // 10 MB
            },
        },
        handler: uploadHandler
    },
    {
        method: 'DELETE',
        path: '/posts',
        handler: deletePost
    },
    {
        method: 'GET',
        path: '/posts',
        handler: getAllPostsHandler
    },
    {
        method: 'GET',
        path: '/posts/{userId}',
        handler: getPostsByUser
    }
];

module.exports = postCraftRoutes;
