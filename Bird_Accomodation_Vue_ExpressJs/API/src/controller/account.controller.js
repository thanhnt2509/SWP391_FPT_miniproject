const accountModel = require("../models/account.model");
const { ErrorHandler } = require("../middlewares/errorHandler.mdw");
const { userStatus } = require("../config/config");

module.exports = {

    getAllAccount: async (req, res, next) => {
        try {
            const result = await accountModel.getAllAccount();
            const accountList = result.map(item => ({
                user_id: item.user_id,
                email: item.email,
                name: item.name,
                address: item.address,
                phone: item.phone,
                role: item.role,
                status: item.status,
                user_img: item.user_img,
                token: item.token,
            }))
            res.status(200).send({
                exitcode: 0,
                message: "Get account list successfully",
                accounts: accountList
            })
        } catch (error) {
            console.log(error.message);
            res.status(500).send("Internal server error");
        }
    },
    getAccountByID: async (req, res, next) => {
        try {
            const { user_id } = req.params;
            const result = await accountModel.getAccountByID(user_id);
            if (result === null) {
                throw new ErrorHandler(404, "Account not found")
            } else {
                res.status(200).send({
                    exitcode: 0,
                    message: "Get account detail successfully",
                    account: result
                })
            }
        } catch (error) {
           console.log(error.message);
           res.status(500).send("Internal server error");
        }
    },
    getSearchAccount: async (req, res, next) => {
        try {
            const { name, email, phone } = req.body;
            const searchInfo = {
                name: name,
                email: email,
                phone: phone
            }
            if (!name && !email && !phone) {
                throw new ErrorHandler(400, "Missing search info")
            }
            const result = await accountModel.getSearchAccount(searchInfo);
            //[user_id],[email],[name],[address],[phone],[role],[status],[user_img],[token]
            const accountList = result.map(item => ({
                user_id: item.user_id,
                email: item.email,
                name: item.name,
                address: item.address,
                phone: item.phone,
                role: item.role,
                status: item.status,
                user_img: item.user_img,
                token: item.token,
            }))
            if (result.length === 0 || result === null) {
                throw new ErrorHandler(404, "Account not found")
            } else {
                res.status(200).send({
                    exitcode: 0,
                    message: "Get account detail successfully",
                    accounts: accountList
                })
            }
        } catch (error) {
           console.log(error.message);
           res.status(500).send("Internal server error");
        }
    },
    changeAccountStatus: async (req, res, next) => {
        try {
            const { user_id } = req.params;
            const { currentStatus } = req.body;
            if (currentStatus === undefined || currentStatus === null) {
                throw new ErrorHandler(400, "Missing current status")
            }
            let newStatus;
            currentStatus === userStatus.INACTIVE ?
                newStatus = userStatus.ACTIVE : newStatus = userStatus.INACTIVE;
            const result = await accountModel.changeAccountStatus(user_id, newStatus);
            if (result === 0) {
                throw new ErrorHandler(404, "Account not found")
            } else {
                const message = newStatus === userStatus.ACTIVE ? "Unblock account successfully" : "Block account successfully";
                res.status(200).send({
                    exitcode: 0,
                    message: message,
                })
            }
        } catch (error) {
           console.log(error.message);
           res.status(500).send("Internal server error");
        }
    },
    updateUserName: async (req, res, next) => {
        try {
            const { user_id } = req.params;
            const { name } = req.body;
            const result = await accountModel.updateUserName(user_id, name);
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