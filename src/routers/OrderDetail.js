const express = require('express');
const Router = express.Router();
const orderDetailController = require('../controller/OrderDetail');
const Auth = require('../helpers/Auth');

Router
  .get('/', orderDetailController.getAllOrderDetail)
  .get('/:id_product', orderDetailController.getOrderDetailById)
  .post('/', orderDetailController.insertOrderDetail)
  .patch('/:id_product', orderDetailController.updateOrderDetail)
  .delete('/:id_product', orderDetailController.updateOrderDetail)
module.exports = Router;