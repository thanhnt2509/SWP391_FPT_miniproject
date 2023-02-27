const express = require('express');

const services = require('../controller/services.controller');


const router = express.Router();

router.route('/')
    .get(services.getAllServices)
    .post(services.addService);

router.route('/:service_name')
    .get(services.getServiceByName)
    .put(services.updateServiceByName)
    .delete(services.deleteServiceByName);

module.exports = router;