const express = require('express')
const router = express.Router()
const {signUpUser} = require("../controllers/userController.js")

router.post('/signup',signUpUser)


module.exports = router