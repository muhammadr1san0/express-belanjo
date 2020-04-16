const express = require('express');
const Router = express.Router();
const orderController = require('../controller/Order');
const Auth = require('../helpers/Auth');

Router
  .get('/', orderController.getAllOrder)
  .get('/:id_order', orderController.getOrderById)
  .post('/', orderController.insertOrder)
  .patch('/:id_order', orderController.updateOrder)
  .delete('/:id_order', orderController.deleteOrder)
module.exports = Router;