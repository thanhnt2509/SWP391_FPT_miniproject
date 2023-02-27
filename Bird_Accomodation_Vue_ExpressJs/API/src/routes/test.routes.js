const express = require('express')
const test = require('../models/test.model')
const router = express.Router();

router.route('/')
    .get(test.getUser)
    .post(test.postUser)
    .patch(test.patchUser)
    .delete(test.deleteUser)

module.exports = router;