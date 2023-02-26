const express = require('express');

const { register, newBooking_userID } = require('../models/account.model');
const { login } = require('../models/account.model');
const { validateEmail } = require('../models/account.model');
const { validateAccount } = require('../models/account.model');
const { getAccountByID } = require('../models/account.model');
// const { newBooking } = require('../models/account.model');   // error
const { getBirdByUserID } = require('../models/account.model');
const { getBirdByBirdID_UserID } = require('../models/account.model');
const { addNewBird_UserID } = require('../models/account.model');
const { deleteBirdID_UserID } = require('../models/account.model');
const { getBirdType } = require('../models/account.model');
const { getNewBirdByUserID } = require('../models/account.model');
const { updateBirdType } = require('../models/account.model');
const { addNewBooking } = require('../models/account.model');

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

router.route('/birdType')
    .get(async (req, res) => {
        try {
            let data = await getAllBirdType();
            res.status(200).json(data.recordset);
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
    .patch(async (req, res) => {
        try {
            let bTypeID = await getBirdType(req.body.bird_type);
            if (bTypeID.recordset.length === 0) {
                res.status(404).json({ message: 'Bird type not found' });
            } else {
                let data = await updateBirdType(req.params.bird_id, await bTypeID.recordset[0].btype_id);
                if (data.rowsAffected[0] === 0) {
                    res.status(404).json({ message: 'Cannot update bird type' });
                } else {
                    res.status(200).json({ message: 'Bird type updated' });
                }
            }
        } catch (error) {
            res.status(500).json(error);
        }
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
            let bTypeID = await getBirdType(req.body.bird_type);
            if (bTypeID.recordset.length === 0) {
                res.status(404).json({ message: 'Bird type not found' });
            } else {
                req.body.type_id = await bTypeID.recordset[0].btype_id;
                let checkAdd = await addNewBird_UserID(req.body, req.params.user_id);
                if (checkAdd.rowsAffected[0] === 0) {
                    res.status(400).json({ message: 'Add Bird failed' });
                } else {
                    let data = await getNewBirdByUserID(req.params.user_id);
                    res.status(200).json(data.recordset[0]);
                }
            }
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    })


module.exports = router
