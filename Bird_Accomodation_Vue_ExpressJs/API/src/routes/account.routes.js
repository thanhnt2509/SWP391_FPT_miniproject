const express = require('express');
const account = require('../controller/account.controller');

const router = express.Router();

router.route('/')
    .get(account.getAllAccount);

router.route('/:user_id')
    .get(account.getAccountByID)
    .patch(account.changeAccountStatus);

router.route('/search')
    .post(account.getSearchAccount);

// router.route('/:user_id/:booking_id/:dreport_id')
//     .get(async (req, res) => {
//     })
//     .put(async (req, res) => {
//     })
//     .delete(async (req, res) => {
//     }) 
module.exports = router
