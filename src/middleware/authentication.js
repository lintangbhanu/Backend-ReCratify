const jwt = require('jsonwebtoken');
const Blacklist = require('../models/blacklistModels');

async function verifyToken(request) {
    const token = request.headers['authorization'];

    if (!token) {
        return null; 
    }

    try {
        const blacklistedToken = await Blacklist.findOne({ where: { token } });

        if (blacklistedToken) {
            return null;
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return decoded; 
    } catch (error) {
        console.error('Error verifying token:', error);
        return null; 
    }
}

module.exports = verifyToken;
