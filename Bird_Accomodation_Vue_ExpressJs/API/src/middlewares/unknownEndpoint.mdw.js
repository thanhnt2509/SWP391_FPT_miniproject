const { ErrorHandler } = require("./errorHandler.mdw");

module.exports = {
    unknownEndpoint: (req, res) => {
        throw new ErrorHandler(404, "Unknown endpoint with " + req.path);
    }
};