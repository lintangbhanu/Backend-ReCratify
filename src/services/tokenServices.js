const jwt = require('jsonwebtoken');

function generateToken(user) {
    const payload = {
        id: user.id,
        email: user.email,
    };

    const options = {
        expiresIn: '1h',
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, options);

    return token;
}

module.exports = generateToken;
