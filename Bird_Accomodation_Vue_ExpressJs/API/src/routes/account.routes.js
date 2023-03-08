const express = require('express');
const account = require('../controller/account.controller');

const { verifyAdmin } = require('../middlewares/verifyAdmin.mdw');

const router = express.Router();

router.route('/')
    .get(verifyAdmin, account.getAllAccount);

router.route('/:user_id')
    .get(verifyAdmin, account.getAccountByID)
    .patch(verifyAdmin, account.changeAccountStatus);

router.route('/search')
    .post(verifyAdmin, account.getSearchAccount);

router.route('/:user_id')
    .patch(account.updateUserName)
// router.route('/:user_id/:booking_id/:dreport_id')
//     .get(async (req, res) => {
//     })
//     .put(async (req, res) => {
//     })
//     .delete(async (req, res) => {
//     }) 
module.exports = router
