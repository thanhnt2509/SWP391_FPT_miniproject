const express = require('express');
// router path import
const user = require('./user.routes');
const account = require('./account.routes');
const post = require('./post.routes');
const service = require('./service.routes');
const review = require('./review.routes');
const auth = require('./auth.routes');
const bird = require('./bird.routes');
const booking = require('./booking.routes');
// middlewares
const { verifyLogin } = require('../middlewares/verifyLogin.mdw');
const { verifyAdmin } = require('../middlewares/verifyAdmin.mdw');

// router
const router = express.Router();

router.use('/user', user);
router.use('/post', verifyLogin, post);
router.use('/auth', auth);
router.use('/service', service);
router.use('/account', verifyLogin, verifyAdmin, account);
router.use('/user', verifyLogin, user);
router.use('/bird', bird);
router.use('/booking', verifyLogin, booking);


// export router
module.exports = router;