const userModel = require('../models/user.model');

module.exports = {
    updateUserName: async (req, res, next) => {
        try {
            const { user_id } = req.params;
            const { name } = req.body;
            const result = await userModel.updateUserName(user_id, name);
            if (result > 0) {
                res.status(200).send({
                    exitcode: 0,
                    message: "Update user name successfully"
                })
            } else {
                res.status(200).send({
                    exitcode: 101,
                    message: "Update user name failed"
                })
            }
        } catch (error) {
           console.log(error.message);
            res.status(500).send("Internal server error");
        }
    }
}