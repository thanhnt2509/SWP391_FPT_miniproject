const express = require('express');
const account = require('../controller/account.controller');

const router = express.Router();

router.route('/login')
    .post(account.login);

router.route('/register')
    .post(account.register);

router.route('/birdType')
    .get(account.getAllBirdType);

router.route('/:user_id/bookings')
    .get(account.getAllBooking);

router.route('/:booking_id/services')
    .get(account.getBookingService_booking_id);

router.route('/:booking_id/reports')
    .get(account.getBookingReport_booking_id);

router.route('/:user_id')
    .get(account.getAccountByID);

router.route('/:user_id/birds')
    .get(account.getBirdByUserID)

router.route('/:user_id/:bird_id')
    .get(account.getBirdByBirdID_UserID)
    //patch update bird type by bird_id and user_id
    //bird_type in as string => need to query bird_type table to get btype_id
    .patch(account.updateBirdType)
    .delete(account.deleteBirdID_UserID);

router.route('/:user_id/newBird')
    //post add new bird by user_id
    //bird_type in as string => need to query bird_type table to get btype_id
    //then add that birdtype_id to the bird table
    // .post(account.addBird_BirdType)


module.exports = router
