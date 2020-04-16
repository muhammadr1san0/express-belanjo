const express = require('express');
const Router = express.Router();
const productController = require('../controller/Product');
const Auth = require('../helpers/Auth');

Router
  .get('/', productController.getAllProduct)
  .get('/:id_product', productController.getProductById)
  .post('/', productController.insertProduct)
  .patch('/:id_product', productController.updateProduct)
  .delete('/:id_product', productController.deleteProduct)
module.exports = Router;