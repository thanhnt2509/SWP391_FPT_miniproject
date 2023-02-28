const express = require('express');
const user = require('./user.routes');
const account = require('./account.routes');
const posts = require('./posts.routes');
const services = require('./services.routes');
const reviews = require('./review.routes');
const manager = require('./manager.routes');

// router path
const router = express.Router();
router.use('/user', user);
router.use('/account', account);
router.use('/posts', posts);
router.use('/services', services);
router.use('/reviews', reviews);
router.use('/manager', manager);






// export router
module.exports = router;