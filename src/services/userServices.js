const { nanoid } = require('nanoid');
const bcrypt = require('bcrypt');
const users = require('../models/usersModels');

async function registerUser(username, email, password) {
    const id = nanoid(11);
    const passwordHash = await bcrypt.hash(password, 10);

    const queryData = await users.create({
        userId: id, 
        username: username,
        email: email,
        password: passwordHash
    });

    if (queryData) {
        return true;
    } else {
        return false;
    }
}

module.exports = registerUser;