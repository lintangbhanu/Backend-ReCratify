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

        // Decode the token to check its expiration without verifying the signature
        const decoded = jwt.decode(token);

        if (!decoded) {
            return null;
        }

        const expiresAt = new Date(decoded.exp * 1000);
        const currentTime = new Date();

        // Check if the token is expired
        if (expiresAt <= currentTime) {
            await Blacklist.create({ token, expiresAt });
            console.log('Expired token added to blacklist.');
            return null;
        }

        // Verify the token
        const verifiedDecoded = jwt.verify(token, process.env.JWT_SECRET);
        return verifiedDecoded;
    } catch (error) {
        console.error('Error verifying token:', error);
        return null;
    }
}

module.exports = verifyToken;
