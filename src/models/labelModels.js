const db = require('../config/dbconf');
const { DataTypes } = require('sequelize');

const label = db.define('labelTable', {
    id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true
    },
    label_name: {
        type: DataTypes.STRING(50)
    }
},
{
    tableName: 'label',
    timestamps: false
});

module.exports = label;