const favorites = require('../../models/favModels');
const users = require('../../models/usersModels');
const dataVideo = require('../../models/dataVideoModels');
const labelModels = require('../../models/labelModels');
const verifyToken = require('../../middleware/authentication');


async function getFavorite(request, h) {
    const userData = await verifyToken(request);
    if (!userData) {
        return h.response({
            status: 'fail',
            message: 'Invalid or missing token'
        }).code(401);
    }

    const { userId } = request.params;

    try {
        const queryFavorite = await favorites.findAll({
            attributes: [],
            include: [
                {
                    model: users,
                    attributes: ['userId'],
                    where: {
                        userId: userId
                    }
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

        const favoriteData = queryFavorite.map(data => {
            return {
                Youtube_ID: data.dataVideoTable.Youtube_ID,
                label: data.labelTable.label_name,
                Snippet: {
                    Title: data.dataVideoTable.title,
                    URL_Thumbnail: data.dataVideoTable.URL_Thumbnail,
                    URL_Video: data.dataVideoTable.URL_Video
                }
            };
        });

        if (favoriteData.length === 0) {
            return h.response({
                status: 'fail',
                message: `Data not found!`
            }).code(400);
        }

        return h.response({
            status: 'success',
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
    const userData = await verifyToken(request);
    if (!userData) {
        return h.response({
            status: 'fail',
            message: 'Invalid or missing token'
        }).code(401);
    }

    const { userId, label, Youtube_ID } = request.payload;

    try {
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
            include: [
                {
                    model: users,
                    attributes: [],
                    where: {
                        userId: userId
                    }
                },
                {
                    model: dataVideo,
                    attributes: [],
                    where: {
                        Youtube_ID: Youtube_ID
                    }
                }
            ]
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
            throw new error('Video failed to be added to favorites list!');
        }
    } catch (error) {
        return h.response({
            status: 'fail',
            message: error.message
        }).code(500);
    }
}

async function deleteFavorite(request, h) {
    const userData = await verifyToken(request);
    if (!userData) {
        return h.response({
            status: 'fail',
            message: 'Invalid or missing token'
        }).code(401);
    }

    const { userId, label, Youtube_ID } = request.payload;

    try {
        const checkFavoriteData = await favorites.findOne({
            attributes: ['userId', 'Youtube_ID'],
            include: [
                {
                    model: users,
                    attributes: [],
                    where: {
                        userId: userId
                    }
                },
                {
                    model: labelModels,
                    attributes: [],
                    where: {
                        label_name: label
                    }
                },  
                {
                    model: dataVideo,
                    attributes: [],
                    where: {
                        Youtube_ID: Youtube_ID
                    }
                }
            ]
        });

        if (!checkFavoriteData) {
            return h.response({
                status: 'fail',
                message: 'Invalid request data!'
            }).code(400);
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
                message: 'Video successfully removed from favorites list!'
            }).code(201);
        } else {
            throw new error('Video failed to be removed from favorites list!');
        }
    } catch (error) {
        return h.response({
            status: 'fail',
            message: error.message
        }).code(500);
    }
}

module.exports = { getFavorite, addFavorite, deleteFavorite };