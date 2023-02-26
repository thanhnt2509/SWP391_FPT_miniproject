const express = require('express');
const user = require('./user.routes');
const account = require('./account.routes');
const posts = require('./posts.routes');
const services = require('./services.routes');
const reviews = require('./review.routes');

// router path
const router = express.Router();
router.use('/user', user);
router.use('/account', account);
router.use('/posts', posts);
router.use('/services', services);
router.use('/reviews', reviews);






// export router
module.exports = router;