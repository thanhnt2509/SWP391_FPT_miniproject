const express = require('express')
const bird = require('../controller/bird.controller')

const router = express.Router()

router.route('/')
    .get(bird.getAllRegistedBird)
    .post(bird.registerNewBird)

router.route('/:bird_id')
    .get(bird.getBirdById)
    .put(bird.updateBirdById)
    .delete(bird.deleteBirdById)

module.exports = router