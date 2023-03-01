const express = require('express');
const manager = require('../models/manager.model');
const router = express.Router();

router.route('/transactions/on-going')
    .get(async (req, res) => {
        try {
            let data = await manager.getTransactions(0);
            res.status(200).json(data.recordset);
        } catch (error) {
            res.status(400).json(error);
        }
    });

router.route('/transactions/pending')
    .get(async (req, res) => {
        try {
            let data = await manager.getTransactions(1);
            res.status(200).json(data.recordset);
        } catch (error) {
            res.status(400).json(error);
        }
    });

router.route('/transactions/success')
    .get(async (req, res) => {
        try {
            let data = await manager.getTransactions(2);
            res.status(200).json(data.recordset);
        } catch (error) {
            res.status(400).json(error);
        }
    });

router.route('/transactions/cancelled')
    .get(async (req, res) => {
        try {
            let data = await manager.getTransactions(3);
            res.status(200).json(data.recordset);
        } catch (error) {
            res.status(400).json(error);
        }
    });

router.route('/transactions/:booking_id/approve')
    .put(async (req, res) => {
        try {
            let data = await manager.approveTransaction(req.params.booking_id);
            res.status(200).json(data.recordset);
        } catch (error) {
            res.status(400).json(error);
        }
    });
router.route('/transactions/:booking_id/complete')
    .put(async (req, res) => {
        try {
            let data = await manager.completeTransaction(req.params.booking_id);
            res.status(200).json(data.recordset);
        } catch (error) {
            res.status(400).json(error);
        }
    });

router.route('/transactions/:booking_id/reject')
    .put(async (req, res) => {
        try {
            let data = await manager.rejectTransaction(req.params.booking_id);
            res.status(200).json(data.recordset);
        } catch (error) {
            res.status(400).json(error);
        }
    });
router.route('/post/newPost')
    .post(async (req, res) => {
        try {
            let data = await addPost(req.body)
            res.status(200).json(data)
        } catch (error) {
            res.status(400).json(error)
        }
    })

module.exports = router;