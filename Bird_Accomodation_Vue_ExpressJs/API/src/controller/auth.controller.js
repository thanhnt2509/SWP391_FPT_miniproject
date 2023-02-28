const accountModel = require("../models/account.model");
const jwt = require("jsonwebtoken");
const config = require("../../src/config/config");

module.exports = {
    login: async (req, res, next) => {
        try {
            const { email, password } = req.body;
            const loginDetail = {
                email: email,
                password: password
            }
            const result = await accountModel.login(loginDetail);
            if (result.length > 0) {
                // Create payload for encryption
                const payload = {
                    email: email,
                };
                res.status(200).send({
                    exitcode: 0,
                    message: "Login successfully",
                    token: jwt.sign(payload, config.JWT_SECRET, {
                        expiresIn: config.JWT_EXP_TIME,
                    }),
                    account: result
                })
            } else {
                res.status(200).send({
                    exitcode: 101,
                    message: "Login failed, wrong password or email"
                })
            }
        } catch (error) {
            next(error);
        }
    },
    register: async (req, res, next) => {
        try {
            const { email, password, name, address, phone } = req.body;
            const validateEmail = await accountModel.validateEmail(email);
            // validate email
            if (validateEmail) {
                res.status(200).send({
                    exitcode: 101,
                    message: "Email already exists"
                });
                return;
            }
            // validate phone
            const validatePhone = await accountModel.validatePhone(phone);
            if (validatePhone) {
                res.status(200).send({
                    exitcode: 102,
                    message: "Phone already exists"
                });
                return;
            }
            const registerDetail = {
                email: email,
                password: password,
                name: name,
                address: address,
                phone: phone
            }
            const result = await accountModel.register(registerDetail);
            if (result > 0) {
                res.status(200).send({
                    exitcode: 0,
                    message: "Register successfully"
                })
            } else {
                res.status(200).send({
                    exitcode: 103,
                    message: "Register failed"
                })
            }
        } catch (error) {
            next(error);
        }
    }
}