const express = require('express')
const bird = require('../controller/bird.controller')
const { verifyLogin } = require('../middlewares/verifyLogin.mdw');

const router = express.Router()

router.route('/')
    .get(verifyLogin, bird.getAllRegistedBird)
    .post(verifyLogin, bird.registerNewBird)

// base data
router.get('/type', bird.getAllBirdType)

router.route('/:bird_id')
    .get(verifyLogin, bird.getBirdById)
    .put(verifyLogin, bird.updateBirdById)
    .delete(verifyLogin, bird.deleteBirdById)


module.exports = router