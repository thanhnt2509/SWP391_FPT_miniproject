const express = require('express')
const review = require('../controller/review.controller')

const router = express.Router();

router.route('/')
    .get(review.getAllReviews)

module.exports = router;