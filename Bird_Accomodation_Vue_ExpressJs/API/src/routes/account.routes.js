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

module.exports = router
