const config = require('../config/config');
const jwt = require('jsonwebtoken');

module.exports = {
    verifyLogin: (req, res, next) => {
        const token = req.headers['x-access-token'];
        if (!token) {
            console.log( "Missing token");
            res.status(500).send( "Missing token")
            return;
        }
        try {
            const decoded = jwt.verify(token, config.JWT_SECRET);
            req.payload = {
                email: decoded.email
            }
            next();
        } catch (err) {
            console.log(err.message);
            res.status(500).send(err.message)
        }
    }
}