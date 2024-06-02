const jwt = require('jsonwebtoken');

function generateToken(user) {
    const payload = {
        id: user.id,
        email: user.email,
    };

    const options = {
        expiresIn: '3d',
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, options);
    return token;
}

module.exports = generateToken;
