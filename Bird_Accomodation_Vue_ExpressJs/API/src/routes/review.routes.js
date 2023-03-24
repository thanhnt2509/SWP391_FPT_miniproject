const express = require('express')
const review = require('../controller/review.controller')

const router = express.Router();

router.route('/')
    .get(review.getAllReviews)


router.route('/:booking_id')
    .post(review.createReview)

module.exports = router;