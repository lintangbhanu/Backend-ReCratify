const { nanoid } = require('nanoid');
const bcrypt = require('bcrypt');
const users = require('../models/usersModels');

async function registerUser(username, email, password) {
    // hashing id and password
    const id = nanoid(11);
    const passwordHash = await bcrypt.hash(password, 10);

    // query untuk input data ke database
    const queryData = await users.create({
        userId: id, 
        username: username,
        email: email,
        password: passwordHash
    });

    // cek apakah query berhasil
    if (queryData) {
        return true;
    } else {
        return false;
    }
}

module.exports = registerUser;