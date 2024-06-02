const jwt = require('jsonwebtoken');
const Blacklist = require('../models/blacklistModels');

async function verifyToken(req, res, next) {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ message: 'Token is not provided' });
    }

    try {
        // Check if token is in blacklist
        const blacklistedToken = await Blacklist.findOne({ where: { token } });

        if (blacklistedToken) {
            return res.status(403).json({ message: 'Token is blacklisted' });
        }

        // Verify token
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(403).json({ message: 'Failed to authenticate token' });
            } else {
                req.user = decoded;
                next();
            }
        });
    } catch (error) {
        console.error('Error verifying token:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = verifyToken;
