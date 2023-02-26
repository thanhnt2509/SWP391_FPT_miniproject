const express = require('express')

// list reviews
const { getAllReviews } = require('../models/review.model')

const router = express.Router();

router.route('/')
    .get(async (req, res) => {
        try {
            let data = await getAllReviews();
            res.status(200).json(data.recordset);
        } catch (error) {
            console.log(error);
            res.status(404).json(error);
        }
    })

module.exports = router;