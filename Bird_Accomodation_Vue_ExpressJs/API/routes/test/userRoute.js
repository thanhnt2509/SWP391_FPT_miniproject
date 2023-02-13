const express = require('express')
const { getAllCustomer } = require('../../modules/test/user_M')
// const { updateCustomer } = require('../modules/user_M')
const { deleteCustomer } = require('../../modules/test/user_M')
const { updateCustomerStatus } = require('../../modules/test/user_M')
const { getCustomerById } = require('../../modules/test/user_M')
const router = express.Router();


// this code will run on localhost:5000/users
router.get('/', async (req, res) => {
    // const data = await getAllCustomer()
    // console.log(data);

    res.json(await getAllCustomer())
})

//this code will run on localhost:5000/users/:userId/:status
router.put('/:userId/:status', async (req, res) => {
    //status 0: unban, 1: ban
    res.json(await updateCustomerStatus(req.params.userId, req.params.status == 0 ? 'unban' : 'ban'))
})

// this code will run on localhost:5000/users/:userId
router.put('/:userId', async (req, res) => {
    // YOUR CODE GOES THERE
    //update data of user with id = userId
    // require body (json account format)

    res.json(await updateCustomer(req.params.userId, req.body))


})

//this code will run on localhost:5000/users/:userId
router.get('/:userId', async (req, res) => {
    //get user with id = userId

    res.json(await getCustomerById(req.params.userId))
})

// this code will run on localhost:5000/users/:userId
router.delete('/:userId', async (req, res) => {
    // YOUR CODE GOES THERE
    //delete user with id = userId

    res.json(await deleteCustomer(req.params.userId))
    

})
module.exports = router