const express = require('express')
const bird = require('../controller/bird.controller')
const { verifyLogin } = require('../middlewares/verifyLogin.mdw');
const multerInstance = require('../middlewares/multer');
const router = express.Router()

router.route('/')
    .get(verifyLogin, bird.getAllRegistedBird)
    .post(multerInstance.upload.single('file'), bird.registerNewBird)

router.get('/type', bird.getAllBirdType)

router.route('/:bird_id')
    .get(verifyLogin, bird.getBirdById)
    .put(verifyLogin, bird.updateBirdById)
    .delete(verifyLogin, bird.deleteBirdById)

module.exports = router