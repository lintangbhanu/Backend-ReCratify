const db = require('../config/dbconf');
const users = require('../models/usersModels');
const { DataTypes } = require('sequelize');
const dataVideo = require('../models/dataVideoModels');
const label = require('../models/labelModels');

// favorites table model
const favorites = db.define('favoritesTable', {
    userId: {
        type: DataTypes.STRING,
        references: {
            model: users,
            key: 'userId'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    label_id: {
        type: DataTypes.INTEGER,
        references: {
            model: label,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    Youtube_ID: {
        type: DataTypes.STRING,
        references: {
            model: dataVideo,
            key: 'Youtube_ID'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    }
},
{
    tableName: 'favorites',
    timestamps: false,
});

favorites.removeAttribute('id');

// set relation
favorites.belongsTo(users, { foreignKey: 'userId' });
users.hasMany(favorites, { foreignKey: 'userId' });

favorites.belongsTo(label, { foreignKey: 'label_id' });
label.hasMany(favorites, { foreignKey: 'label_id' });

favorites.belongsTo(dataVideo, { foreignKey: 'Youtube_ID' });
dataVideo.hasMany(favorites, { foreignKey: 'Youtube_ID' });

module.exports = favorites;