const express = require('express')

const { addUser, updateUser, deleteUser, getUserById, getUserByName, getAllUsers } = require('../src/modules/userModule')
const { addBird, updateBird, deleteBird, getBirdById, getBirdByName, getAllBirds } = require('../src/modules/userModule')
const { addService, updateService, deleteService, getServiceById, getServiceByName, getAllServices } = require('../src/modules/userModule')
const { addBooking, updateBooking, getBookingById, getAllBookings } = require('../src/modules/userModule')
const { addBookingDetail, updateBookingDetail, deleteBookingDetail, getBookingDetailById, getAllBookingDetails } = require('../src/modules/userModule')
const { addDailyReport, updateDailyReport, deleteDailyReport, getDailyReportById } = require('../src/modules/userModule')
const { addDailyFeedback, updateDailyFeedback, deleteDailyFeedback, getDailyFeedbackById } = require('../src/modules/userModule')
const { addBill, updateBill, deleteBill, getBillById, getAllBills } = require('../src/modules/userModule')
const { getAvgMonthIncome, addNews, updateNews, deleteNews, getNewsById} = require('../src/modules/userModule')



const router = express.Router()





module.exports = router