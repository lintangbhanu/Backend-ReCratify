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
    tableName: 'post_tags',
    timestamps: false,
});

postTags.removeAttribute('id');

// set relation
postTags.belongsTo(postcraft, { foreignKey: 'postId' });
postcraft.hasMany(postTags, { foreignKey: 'postId' });

postTags.belongsTo(label, { foreignKey: 'label_id' });
label.hasMany(postTags, { foreignKey: 'label_id' });

module.exports = postTags;