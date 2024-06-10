const getCraftVideo = require("../handlers/craft/craftVideoHandlers");
const getYoutubeVideoDetail = require("../handlers/craft/detailVideoHandlers");
const { getFavorite, addFavorite, deleteFavorite } = require("../handlers/craft/favoriteHandlers");

const craftRoutes = [
    {
        method: 'GET',
        path: '/allvideos/{label}',
        handler: getCraftVideo
    },
    {
        method: 'GET',
        path: '/favorites',
        handler: getFavorite
    },
    {
        method: 'POST',
        path: '/favorites',
        handler: addFavorite
    },
    {
        method: 'DELETE',
        path: '/favorites',
        handler: deleteFavorite
    },
    {
        method: 'GET',
        path: '/detailvideos/{youtubeId}',
        handler: getYoutubeVideoDetail
    },

];

module.exports = craftRoutes;