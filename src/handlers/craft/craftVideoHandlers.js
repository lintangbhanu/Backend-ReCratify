const labelModels = require('../../models/labelModels');
const dataVideo = require('../../models/dataVideoModels');
const verifyToken = require('../../middleware/authentication');

async function getCraftVideo(request, h) {
    const userData = await verifyToken(request);
    if (!userData) {
        return h.response({
            status: 'fail',
            message: 'Invalid or missing token'
        }).code(401);
    }

    const { label } = request.params;

    try {
        const queryVideo = await dataVideo.findAll({
            attributes: ['Youtube_ID', 'title', 'URL_Thumbnail', 'URL_Video'],
            include: {
                model: labelModels,
                attributes: ['label_name'],
                where: {
                    label_name: label
                }
            }
        });

        const resultVideo = queryVideo.map(data => {
            return {
                Youtube_ID: data.Youtube_ID,
                Snippet: {
                    Title: data.title,
                    URL_Thumbnail: data.URL_Thumbnail,
                    URL_Video: data.URL_Video
                }
            };
        });

        if (resultVideo.length === 0) {
            return h.response({
                status: 'fail',
                message: `Data with ${label} label was not found!`
            }).code(400);
        }

        return h.response({
            status: 'success',
            label: label,
            data: resultVideo
        })
        .code(200);
    } catch (error) {
        return h.response({
            status: 'fail',
            message: error.message
        }).code(500);
    }
}

module.exports = getCraftVideo;