const jwt = require('jsonwebtoken');
const Blacklist = require('../models/blacklistModels');

function generateToken(user) {
    const payload = {
        id: user.id,
        email: user.email,
    };

    const options = {
        expiresIn: '3d',
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, options);

    const decodedToken = jwt.decode(token);
    const expiresAt = new Date(decodedToken.exp * 1000);
    const currentTime = new Date();

    if (expiresAt <= currentTime) {
        Blacklist.create({ token, expiresAt })
            .then(() => console.log('Token added to blacklist.'))
            .catch(err => console.error('Error adding token to blacklist:', err));
    }

    return token;
}

module.exports = generateToken;
