const express = require('express')

const { updateUserName } = require('../models/user.model')
const { getUser } = require('../models/user.model')





const router = express.Router()

router.route('/')
    .get(async (req, res) => {
        try {
            let data = await getUser()
            res.status(200).json(data.recordset)
        } catch (error) {
            console.log(error)
            res.status(500).json(error)
        }
    })

router.route('/:user_id')
    .patch(async (req, res) => {
        try {
            let data = await updateUserName(req.params.user_id, req.body)
            res.status(200).json(data)
        } catch (error) {
            console.log(error)
            res.status(500).json(error)
        }
    })




module.exports = router