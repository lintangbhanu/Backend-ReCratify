const db = require('../config/dbconf');
const { DataTypes } = require('sequelize');
const postcraft = require('./postcraftModels')
const label = require('../models/labelModels');

const postTags = db.define('postTagsTable', {
    postId: {
        type: DataTypes.STRING,
        references: {
            model: postcraft,
            key: 'postId'
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
    }
},
{
    tableName: 'favorites',
    timestamps: false,
});


module.exports = postTags;