const express = require('express');
const router = express.Router();
const UserController = require('../controladores/UserController');

router.post('/register', UserController.register);
router.post('/login', UserController.login);

module.exports = router;