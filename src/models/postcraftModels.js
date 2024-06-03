const { DataTypes } = require('sequelize');
const db = require('../config/dbconf');
const users = require('./usersModels');

const postCraft = db.define('postCraftTable', {
    postId: {
        type: DataTypes.STRING(11), // UUID is 36 characters
        primaryKey: true,
    },
    userId: {
        type: DataTypes.STRING,
        references: {
            model: users,
            key: 'userId'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    title: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    URL_Image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
    }
}, {
    tableName: 'craft_posts',
    timestamps: false
});

postCraft.removeAttribute('id');

postCraft.belongsTo(users, { foreignKey: 'userId' });
users.hasMany(postCraft, { foreignKey: 'userId' });

module.exports = postCraft;
