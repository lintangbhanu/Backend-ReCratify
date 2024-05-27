const db = require('../config/dbconf');
const { DataTypes } = require('sequelize');

const users = db.define('usersTable', {
    userId: {
        type: DataTypes.STRING(11),
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    tableName: 'users',
    timestamps: false
});

module.exports = users;

// migrate table: silahkan uncomment kode dibawah jika diperlukan
// users.drop().then(() => {
//     users.sync();
// });