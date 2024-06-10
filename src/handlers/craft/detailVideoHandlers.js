const dataVideo = require('../../models/dataVideoModels');
const labelModels = require('../../models/labelModels');
const verifyToken = require('../../middleware/authentication');

async function getYoutubeVideoDetail(request, h) {
    const userData = await verifyToken(request);
    if (!userData) {
        return h.response({
            status: 'fail',
            message: 'Invalid or missing token please re-login'
        }).code(401);
    }

    const { youtubeId } = request.params;

    try {
        const video = await dataVideo.findOne({
            where: { Youtube_ID: youtubeId },
            include: [{
                model: labelModels,
                attributes: ['label_name']
            }]
        });

        if (!video) {
            return h.response({
                status: 'fail',
                message: 'Video not found'
            }).code(404);
        }

        const videoData = {
            Youtube_ID: video.Youtube_ID,
            label: video.labelTable.label_name,
            Title: video.title,
            URL_Thumbnail: video.URL_Thumbnail,
            URL_Video: video.URL_Video,
        };

        return h.response({
            status: 'success',
            Video: videoData
        }).code(200);
    } catch (error) {
        return h.response({
            status: 'fail',
            message: error.message
        }).code(500);
    }
}

module.exports = getYoutubeVideoDetail;
