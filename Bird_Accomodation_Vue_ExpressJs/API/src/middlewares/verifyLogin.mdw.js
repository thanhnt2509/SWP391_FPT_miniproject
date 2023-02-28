const config = require('../config/config');
const jwt = require('jsonwebtoken');
const ErrorHandler = require('../middlewares/errorHandler.mdw');

module.exports = {
    verifyLogin: (req, res, next) => {
        const token = req.headers['x-access-token'];
        if (!token) {
            throw new ErrorHandler(401, "Missing token");
        }
        try {
            const decoded = jwt.verify(token, config.JWT_SECRET);
            req.payload = {
                email: decoded.email
            }
            next();
        } catch (err) {
            throw new ErrorHandler(401, err.message);
        }
    }
}