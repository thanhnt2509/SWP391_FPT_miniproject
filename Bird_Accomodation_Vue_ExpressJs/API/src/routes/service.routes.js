const express = require('express');
const service = require('../controller/service.controller');
const { verifyLogin } = require('../middlewares/verifyLogin.mdw');
const { verifyAdmin } = require('../middlewares/verifyAdmin.mdw');
const multerInstance = require('../middlewares/multer')
const router = express.Router();

router.route('/')
    .get(service.getAllServices)
    .post(verifyLogin, verifyAdmin, service.addService);

router.route('/highlight')
    .get(service.getAllHighLightServices);

router.route('/:service_id')
    .get(service.getServiceById)
    .put(verifyLogin, verifyAdmin, multerInstance.uploadService.single('file'), service.updateServiceById)
    .delete(verifyLogin, verifyAdmin, service.deleteServiceById);


module.exports = router;