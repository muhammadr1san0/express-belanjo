const express = require('express')

const user = require('./User');
const Auth = require('../helpers/Auth');
const product = require('./Product');
const order = require('./Order');
const category = require('./CategoryProduct');
const orderDetail = require('./OrderDetail')

const Router = express.Router();

Router
  .all('/*', Auth.authInfo)
  .use('/user', user)
  .use('/product', product)
  .use('/order', order)
  .use('/category', category)
  .use('/order-detail', orderDetail)
module.exports = Router;