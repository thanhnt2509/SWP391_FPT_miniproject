const userModel = require('../models/user.model');

module.exports = {
    getUser: async (req, res, next) => {
        try {
            const result = await userModel.getUser();
            const userList = result.map(item => ({
                user_id: item.user_id,
                email: item.email,
                name: item.name,
                address: item.address,
                phone: item.phone,
                role: item.role,
                status: item.status,
                user_img: item.user_img,
                token: item.token
            }))
            res.status(200).send({
                exitcode: 0,
                message: "Get user list successfully",
                users: userList
            })
        } catch (error) {
            next(error);
        }
    },
    updateUserName: async (req, res, next) => {
        try {
            const { user_id } = req.params;
            const { name } = req.body;
            const result = await userModel.updateUserName(user_id, name);
            if (result > 0){
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
            next(error);
        }
    }
}