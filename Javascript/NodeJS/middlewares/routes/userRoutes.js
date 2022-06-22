const express = require('express')
const router = express.Router();

const { getUsers } = require('../controllers/userController')
const { authorize } = require('../middlewares/authMidlleware')

/** You can use any of the following two methods */

// router.route('/').get(authorize,getUsers);
router.use('/',authorize, getUsers)

module.exports = router