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
];

module.exports = postCraftRoutes;
