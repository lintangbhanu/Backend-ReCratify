const db = require('../config/dbconf');
const { DataTypes } = require('sequelize');
const label = require('../models/labelModels');

// video data table model
const dataVideo = db.define('dataVideoTable', {
    Youtube_ID: {
        type: DataTypes.STRING(20),
        primaryKey: true
    },
    label_id: {
        type: DataTypes.INTEGER(11),
        references: {
            model: label,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    title: {
        type: DataTypes.TEXT
    },
    URL_Thumbnail: {
        type: DataTypes.TEXT
    },
    URL_Video: {
        type: DataTypes.TEXT
    }
},
{
    tableName: 'data_video',
    timestamps: false
});

dataVideo.removeAttribute('id');

dataVideo.belongsTo(label, { foreignKey: 'label_id' });
label.hasMany(dataVideo, { foreignKey: 'label_id' });

module.exports = dataVideo;