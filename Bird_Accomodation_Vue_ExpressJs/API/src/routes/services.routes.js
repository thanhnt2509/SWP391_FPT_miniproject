const express = require('express');

// CRUD Service
const { getAllServices,
    getServiceByName,
    addService,
    updateServiceByName,
    deleteServiceByName } = require('../models/services.model');

const router = express.Router();

router.route('/')
    .get(async (req, res) => {
        try {
            let data = await getAllServices();
            res.status(200).json(data.recordset);
        } catch (error) {
            console.log(error);
            res.status(404).json(error);
        }
    })
    .post(async (req, res) => {
        try {
            let data = await addService(req.body);
            res.status(200).json(data);
        } catch (error) {
            res.status(400).json(error);
        }
    });

router.route('/:service_name')
    .get(async (req, res) => {
        try {
            let data = await getServiceByName(req.params.service_name);
            res.status(200).json(data.recordset);
        } catch (error) {
            res.status(404).json(error);
        }
    })
    .put(async (req, res) => {
        try {
            let data = await updateServiceByName(req.params.service_name, req.body);
            res.status(200).json(data);
        } catch (error) {
            res.status(400).json(error);
        }
    })
    .delete(async (req, res) => {
        try {
            let data = await deleteServiceByName(req.params.service_name);
            res.status(200).json(data);
        } catch (error) {
            res.status(400).json(error);
        }
    });

module.exports = router;