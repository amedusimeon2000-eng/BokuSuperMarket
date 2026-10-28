const express = require('express');
const router = express.Router(); //

const UserController = require('../Controller/UserController');

//define the routes
router.post('/createUser', UserController.createUser);
router.post('/loginUser', UserController.loginUser);

//export the router to be used in other files
module.exports = router;