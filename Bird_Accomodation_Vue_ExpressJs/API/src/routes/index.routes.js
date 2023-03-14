const express = require('express');
// router path import
const account = require('./account.routes');
const post = require('./post.routes');
const service = require('./service.routes');
const review = require('./review.routes');
const auth = require('./auth.routes');
const bird = require('./bird.routes');
const booking = require('./booking.routes');
const report = require('./report.routes');
const bill = require('./bill.routes');
const handleFile = require('./handleFile.routes');
// middlewares
const { verifyLogin } = require('../middlewares/verifyLogin.mdw');

// router
const router = express.Router();

// public routes
router.use('/post', post);
router.use('/auth', auth);
router.use('/service', service);
router.use('/bird', bird);
router.use('/review', review);

// login required routes
router.use('/account', verifyLogin, account);
router.use('/booking', verifyLogin, booking);
router.use('/report', verifyLogin, report);
router.use('/bill', verifyLogin, bill);
router.use('/file', handleFile);

// export router
module.exports = router;