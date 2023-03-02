const config = require("../../src/config/config");
const accountModel = require("../../src/models/account.model");
const { ErrorHandler }  = require("../../src/middlewares/errorHandler.mdw");

module.exports = {
    verifyAdmin: async (req, res, next) => {
        try {
            const email = await req.payload.email;
            const result = await accountModel.validateRole(email);
            if (result !== config.role.ADMIN) {
                throw new ErrorHandler(403, "Need admin permission to call this route")
            }
            next();
        } catch (error) {
            next(error);
        }
    }
}