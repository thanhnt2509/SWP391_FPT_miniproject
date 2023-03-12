const express = require('express');
const bill = require('../controller/bill.controller');

const { verifyAdmin } = require('../middlewares/verifyAdmin.mdw');

const router = express.Router();

// router.route('/')

router.route('/:booking_id')
    .get(bill.getBill)

router.route('/new')
    .post(bill.createBill)

module.exports = router