const express = require('express')
const {getHome,login} = require('../controllers/controllers')
const router = express.Router()

router.app.get('/',getHome )

router.post('/',login )

module.exports = {router}