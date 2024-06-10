const favorites = require('../../models/favModels');
const users = require('../../models/usersModels');
const dataVideo = require('../../models/dataVideoModels');
const labelModels = require('../../models/labelModels');
const verifyToken = require('../../middleware/authentication');


async function getFavorite(request, h) {
    try {
        const userData = await verifyToken(request);

        if (!userData) {
            return h.response({
                status: 'fail',
                message: 'Invalid or missing token please re-login'
            }).code(401);
        }

        const userId = userData.id;

        const queryFavorite = await favorites.findAll({
            attributes: [],
            include: [
                {
                    model: users,
                    attributes: ['userId'],
                    where: { userId: userId }
                },
                {
                    model: labelModels,
                    attributes: ['label_name']
                },
                {
                    model: dataVideo,
                    attributes: ['Youtube_ID', 'title', 'URL_Thumbnail', 'URL_Video']
                }
            ]
        });

        const favoriteData = queryFavorite.map(data => ({
            Youtube_ID: data.dataVideoTable.Youtube_ID,
            label: data.labelTable.label_name,
            Title: data.dataVideoTable.title,
            URL_Thumbnail: data.dataVideoTable.URL_Thumbnail,
            URL_Video: data.dataVideoTable.URL_Video
        }));
        

        if (favoriteData.length === 0) {
            return h.response({
                status: 'fail',
                message: 'Data not found!'
            }).code(400);
        }

        return h.response({
            status: 'success',
            userId: userId,
            favorites: favoriteData
        }).code(200);
    } catch (error) {
        return h.response({
            status: 'fail',
            message: error.message
        }).code(500);
    }
}


async function addFavorite(request, h) {
    try {
        const userData = await verifyToken(request);
        
        if (!userData) {
            return h.response({
                status: 'fail',
                message: 'Invalid or missing token please re-login'
            }).code(401);
        }

        const userId = userData.id;
        
        const { label, Youtube_ID } = request.payload;

        const userCheck = await users.findOne({
            where: {
                userId: userId
            }
        });

        if (!userCheck) {
            return h.response({
                status: 'fail',
                message: 'User not found!'
            }).code(400);
        }

        const videoData = await dataVideo.findOne({
            attributes: ['Youtube_ID', 'label_id'],
            include: {
                model: labelModels,
                attributes: [],
                where: {
                    label_name: label
                }
            },
            where: {
                Youtube_ID: Youtube_ID
            }
        });

        if (!videoData) {
            return h.response({
                status: 'fail',
                message: 'Video data does not match!'
            }).code(400);
        }

        const checkFavoriteData = await favorites.findOne({
            attributes: ['userId', 'Youtube_ID'],
            where: {
                userId: userId,
                Youtube_ID: Youtube_ID
            }
        });

        if (checkFavoriteData) {
            return h.response({
                status: 'fail',
                message: 'Video is already in the favorites list!'
            }).code(400);
        }

        const addQuery = await favorites.create({
            userId: userId,
            label_id: videoData.label_id,
            Youtube_ID: Youtube_ID
        });

        if (addQuery) {
            return h.response({
                status: 'success',
                message: 'Video successfully added to favorites list!'
            }).code(201);
        } else {
            throw new Error('Video failed to be added to favorites list!');
        }
    } catch (error) {
        return h.response({
            status: 'fail',
            message: error.message
        }).code(500);
    }
}



async function deleteFavorite(request, h) {
    try {
        const userData = await verifyToken(request);
        if (!userData) {
            return h.response({
                status: 'fail',
                message: 'Invalid or missing token please re-login'
            }).code(401);
        }

        const userId = userData.id;

        const { Youtube_ID } = request.payload;

        const checkFavoriteData = await favorites.findOne({
            where: {
                userId: userId,
                Youtube_ID: Youtube_ID
            }
        });

        if (!checkFavoriteData) {
            return h.response({
                status: 'fail',
                message: 'Favorite video not found for the user'
            }).code(404);
        }

        const deleteQuery = await favorites.destroy({
            where: {
                userId: userId,
                Youtube_ID: Youtube_ID
            }
        });

        if (deleteQuery) {
            return h.response({
                status: 'success',
                message: 'Favorite video successfully removed!'
            }).code(200);
        } else {
            throw new Error('Failed to remove favorite video');
        }
    } catch (error) {
        return h.response({
            status: 'fail',
            message: error.message
        }).code(500);
    }
}


module.exports = {
    getFavorite,
    addFavorite,
    deleteFavorite
};