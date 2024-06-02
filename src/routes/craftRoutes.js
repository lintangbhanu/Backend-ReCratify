const getCraftVideo = require("../handlers/craft/craftVideoHandlers");
const { getFavorite, addFavorite, deleteFavorite } = require("../handlers/craft/favoriteHandlers");

const craftRoutes = [
    {
        method: 'GET',
        path: '/craft-data/{label}',
        handler: getCraftVideo
    },
    {
        method: 'GET',
        path: '/favorites/{userId}',
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
    }
];

module.exports = craftRoutes;