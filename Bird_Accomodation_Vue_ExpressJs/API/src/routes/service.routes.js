const express = require('express');
const service = require('../controller/service.controller');
const { verifyLogin } = require('../middlewares/verifyLogin.mdw');
const { verifyAdmin } = require('../middlewares/verifyAdmin.mdw');

const router = express.Router();

router.route('/')
    .get(service.getAllServices)
    .post(verifyLogin, verifyAdmin, service.addService);

router.route('/name/:service_name')
    .get(service.getServiceByName)
    .put(service.updateServiceByName)
    .delete(service.deleteServiceByName);

router.route('/:service_id')
    .get(service.getServiceById)
    .put(verifyLogin, verifyAdmin, service.updateServiceById)
    .delete(verifyLogin, verifyAdmin, service.deleteServiceById);

module.exports = router;