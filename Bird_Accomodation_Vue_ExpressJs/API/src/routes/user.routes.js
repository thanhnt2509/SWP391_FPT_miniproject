const express = require('express')
const user = require('../controller/user.controller')


const router = express.Router()

router.route('/')
    .get()

router.route('/:user_id')
    .patch(user.updateUserName)

module.exports = router