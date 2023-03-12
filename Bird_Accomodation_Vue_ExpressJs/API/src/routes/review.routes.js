const express = require('express')
const review = require('../controller/review.controller')
const { verifyAdmin } = require('../middlewares/verifyAdmin.mdw')

const router = express.Router();

router.route('/')
    .get(review.getAllReviews)
    .post(review.addReview)

router.route('/:review_id')
    .put(review.editReview)
    .delete(verifyAdmin, review.deleteReview)

router.route('/filter')
    .post(review.filterReview)

module.exports = router;