const express = require('express');
const Router = express.Router();
const userController = require('../controller/User');

Router
  .post('/login', userController.login)
  .post('/register', userController.register)
module.exports = Router;