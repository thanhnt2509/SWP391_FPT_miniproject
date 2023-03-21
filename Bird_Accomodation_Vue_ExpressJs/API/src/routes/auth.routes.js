const express = require('express');
const auth = require('../controller/auth.controller');

const router = express.Router();

router.route('/login')
    .post(auth.login);
    
router.route('/register')
    .post(auth.register);

router.route('/isExistAccount')
    .post(auth.isAccountExist);

module.exports = router;