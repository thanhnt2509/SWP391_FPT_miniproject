const express = require('express')

const { addUser, updateUser, deleteUser, getUserById, getUserByName, getAllUsers, updateUserName } = require('../src/modules/userModule')
const { addBird, updateBird, deleteBird, getBirdById, getBirdByName, getAllBirds, getAllBirdOfUser, getAllBirdType } = require('../src/modules/userModule')
const { addService, updateService, deleteService, getServiceById, getServiceByName, getAllServices } = require('../src/modules/userModule')
const { addBooking, updateBooking, getBookingById, getAllBookings } = require('../src/modules/userModule')
const { addBookingDetail, updateBookingDetail, deleteBookingDetail, getBookingDetailById, getAllBookingDetails } = require('../src/modules/userModule')
const { addDailyReport, updateDailyReport, deleteDailyReport, getDailyReportById } = require('../src/modules/userModule')
const { addDailyFeedback, updateDailyFeedback, deleteDailyFeedback, getDailyFeedbackById } = require('../src/modules/userModule')
const { addBill, updateBill, deleteBill, getBillById, getAllBills } = require('../src/modules/userModule')
const { getAvgMonthIncome, addNews, updateNews, deleteNews, getNewsById} = require('../src/modules/userModule')



const router = express.Router()


router.get('/',  async (req, res) => {
    const users =  (await getAllUsers()).recordset;
    res.json(users)
})


router.get('/:userId', async (req, res) => {
    const users = (await getUserById(req.params.userId)).recordset;
    res.json(users)
})


//getAllBirdOfUser with user id
router.get('/:userId/birds', async (req, res) => {
    const birds = (await getAllBirdOfUser(req.params.userId)).recordset;
    res.json(birds)
})

router.get('/birds/types', async (req, res) => {
    const birds = (await getAllBirdType()).recordset;
    res.json(birds)
})

router.post('/update', async (req, res) => {
    const users = (await updateUserName(req.body.user_id, req.body)).recordset;
    console.log(`Update user ${req.body.user_id} with ${req.body.name} successfully`);
    res.json(users)
})


module.exports = router