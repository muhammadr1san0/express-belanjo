const express = require('express');
const Router = express.Router();
const userController = require('../controller/');
const Auth = require('../helpers/Auth');

Router
  .post('/login', userController.login)
  .post('/register', Auth.accessToken, userController.register)
module.exports = Router;