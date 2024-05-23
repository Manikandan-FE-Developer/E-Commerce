const express = require('express');
const router = express.Router();
const { register } = require('../controllers/registerController');
const { loginUser } = require('../controllers/loginController');

router.post('/register', register);

router.post('/login', loginUser);

module.exports = router;