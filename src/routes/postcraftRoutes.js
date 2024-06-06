const getAllPostsHandler = require('../handlers/publish/allPosts');
const getPostsByUser = require('../handlers/publish/userPosts');
const deletePost = require('../handlers/publish/deletePosts');
const postingHandler = require('../handlers/publish/Posting');

const postCraftRoutes = [
    {
        method: 'POST',
        path: '/publish',
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
        path: '/publish',
        handler: deletePost
    },
    {
        method: 'GET',
        path: '/publish',
        handler: getAllPostsHandler
    },
    {
        method: 'GET',
        path: '/publish/{userId}',
        handler: getPostsByUser
    },
];

module.exports = postCraftRoutes;
