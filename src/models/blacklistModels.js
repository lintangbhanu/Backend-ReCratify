const { DataTypes } = require('sequelize');
const db = require('../config/dbconf');

const Blacklist = db.define('Blacklist', {
    token: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
    },
    expiresAt: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    tableName: 'blacklist',
    timestamps: false
});

module.exports = Blacklist;
