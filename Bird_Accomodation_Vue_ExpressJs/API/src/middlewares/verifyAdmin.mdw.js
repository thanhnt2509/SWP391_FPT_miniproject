const config = require("../../src/config/Connection");
const accountModel = require("../../src/models/account.model");
const ErrorHandler  = require("../../src/middlewares/errorHandler.mdw");

module.exports = {
    verifyAdmin: async (req, res, next) => {
        try {
            const email = req.payload.email;
            const result = await accountModel.validateEmail(email);
            if (result.role !== config.role.ADMIN) {
                throw new ErrorHandler(403, "Need admin permission to call this route")
            }
        } catch (error) {
            next(error);
        }
    }
}