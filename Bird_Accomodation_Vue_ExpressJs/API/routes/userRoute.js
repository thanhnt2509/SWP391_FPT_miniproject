const express = require('express')
const { getAllCustomer, updateCustomerStatus  } = require('../modules/user_M')
const router = express.Router();


// this code will run on localhost:5000/users
router.get('/', async (req, res) => {
    // const data = await getAllCustomer()
    // console.log(data);

    res.json(await getAllCustomer())
})


// this code will run on localhost:5000/users/:userId
router.put('/:userId/:status', async (req, res) => {
    // status 0: unban
    // status 1: banned

    // YOUR CODE GOES THERE
    res.json(await updateCustomerStatus(req.params.userId, req.params.status == 0 ? 'unban' : 'banned'))
})


// this code will run on localhost:5000/users/:userId
router.delete('/:userId', async (req, res) => {
    

    // YOUR CODE GOES THERE
})
module.exports = router