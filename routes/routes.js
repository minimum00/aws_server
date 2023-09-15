const router = require('express').Router()

const sendEmail = require('../controller/appController.js')

router.get('/sendemail',sendEmail);

module.exports = router