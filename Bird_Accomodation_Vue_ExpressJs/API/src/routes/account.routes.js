const express = require('express');
const account = require('../controller/account.controller');
const { verifyAdmin } = require('../middlewares/verifyAdmin.mdw');

const router = express.Router();

router.route('/')
    .get(verifyAdmin, account.getAllAccount);

router.route('/:user_id')
    .get(verifyAdmin, account.getAccountByID)
    .put(verifyAdmin, account.changeAccountStatus)
    .patch(account.updateUserName)

router.route('/search')
    .post(verifyAdmin, account.getSearchAccount);

module.exports = router
