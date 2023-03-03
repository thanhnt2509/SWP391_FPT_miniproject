const express = require('express');

const service = require('../controller/service.controller');


const router = express.Router();

router.route('/')
    .get(service.getAllServices)
    .post(service.addService);

// router.route('/:service_name')
//     .get(service.getServiceByName)
//     .put(service.updateServiceByName)
//     .delete(service.deleteServiceByName);

router.route('/:service_id')
    .get(service.getServiceById)
    .put(service.updateServiceById)
    .delete(service.deleteServiceById);


module.exports = router;