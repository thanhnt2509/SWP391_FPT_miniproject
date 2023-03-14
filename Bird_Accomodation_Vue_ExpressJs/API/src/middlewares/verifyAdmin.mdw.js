const config = require("../../src/config/config");
const accountModel = require("../../src/models/account.model");

module.exports = {
    verifyAdmin: async (req, res, next) => {
        try {
            const email = await req.payload.email;
            const result = await accountModel.validateRole(email);
            if (result !== config.role.ADMIN) {
                console.log("Need admin permission to call this route");
                res.status(500).send("Need admin permission to call this route");
            }
            next();
        } catch (error) {
            next(error);
        }
    }
}