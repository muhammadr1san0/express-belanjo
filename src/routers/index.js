const express = require('express')

const user = require('./User');
const Auth = require('../helpers/Auth');
// const product = require('./Product');
// const order = require('./Order');
// const categoryProduct = require('./CategoryProduct');

const Router = express.Router();

Router
  .all('/*', Auth.authInfo)
  .use('/user', user)
  // .use('/product', product)
  // .use('/order', order)
  // .use('/category-product', categoryProduct)
module.exports = Router;