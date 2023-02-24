const express = require('express');

const { register } = require('../models/account.model');
const { login } = require('../models/account.model');
const { validateEmail } = require('../models/account.model');
const { getAccountByID } = require('../models/account.model');
const { getBirdByUserID } = require('../models/account.model');
const { getBirdByBirdID_UserID } = require('../models/account.model');
const { addNewBird_UserID } = require('../models/account.model');
const { deleteBirdID_UserID } = require('../models/account.model');

const router = express.Router();

router.route('/login')
    .post(async (req, res) => {
        try {
            let data = await login(req.body);
            //check if data recordset is empty
            if (data.recordset.length === 0) {
                res.status(404).json({ message: 'Invalid email or password' });
            } else {
                res.status(200).json(data.recordset[0]);
            }
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    })

router.route('/register')
    .post(async (req, res) => {
        try {
            let validateData = await validateEmail(req.body.email);
            if (validateData.recordset.length === 0) {
                let data = await register(req.body);
                res.status(200).json(data);
            } else {
                res.status(400).json({ message: 'Email already exists' });
            }
        } catch (error) {
            res.status(500).json(error);
        }
    })

router.route('/:user_id')
    .get(async (req, res) => {
        try {
            let data = await getAccountByID(req.params.user_id);
            if (data.recordset.length === 0) {
                res.status(404).json({ message: 'Account not found' });
            } else {
                res.status(200).json(data.recordset[0]);
            }
        } catch (error) {
            res.status(500).json(error);
        }
    })

router.route('/:user_id/birds')
    .get(async (req, res) => {
        try {
            let data = await getBirdByUserID(req.params.user_id);
            if (data.recordset.length === 0) {
                res.status(404).json({ message: 'User not found' });
            } else {
                res.status(200).json(data.recordset);
            }
        } catch (error) {
            res.status(500).json(error);
        }
    })

router.route('/:user_id/:bird_id')
    .get(async (req, res) => {
        try {
            let data = await getBirdByBirdID_UserID(req.params.bird_id, req.params.user_id);
            if (data.recordset.length === 0) {
                res.status(404).json({ message: 'Bird or User not found' });
            } else {
                res.status(200).json(data.recordset[0]);
            }
        } catch (error) {
            res.status(500).json(error);
        } 
    })
    .put(async (req, res) => {
        // code here
        // this one to update bird or kind of...
    })
    .delete(async (req, res) => {
        try {
            let data = await deleteBirdID_UserID(req.params.bird_id, req.params.user_id);
            if (data.rowsAffected[0] === 0) {
                res.status(404).json({ message: 'Bird or User not found' });
            } else {
                res.status(200).json({ message: 'Bird deleted' });
            }
        } catch (error) {
            res.status(500).json(error);
        }
    })

router.route('/:user_id/newBird')
    .post(async (req, res) => {
        try {
            let data = await addNewBird_UserID(req.body, req.params.user_id);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json(error);
        }
    })


module.exports = router
