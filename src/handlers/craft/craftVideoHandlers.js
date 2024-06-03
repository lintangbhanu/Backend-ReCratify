const labelModels = require('../../models/labelModels');
const dataVideo = require('../../models/dataVideoModels');

async function getCraftVideo(request, h) {
    const token = request.headers.authorization;

    if (!token) {
        return h.response({
            status: 'fail',
            message: 'Token tidak ditemukan'
        }).code(400);
    }
    const { label } = request.params;

    try {
        // get data video
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

        // mapping data
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

        // checking query result
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