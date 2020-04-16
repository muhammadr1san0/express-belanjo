const express = require('express');
const Router = express.Router();
const categoryController = require('../controller/CategoryProduct');
const Auth = require('../helpers/Auth');

Router
  .get('/', categoryController.getAllCategory)
  .get('/:id_order', categoryController.getCategoryById)
  .post('/', categoryController.insertCategory)
  .patch('/:id_order', categoryController.updateCategory)
  .delete('/:id_order', categoryController.deleteCategory)
module.exports = Router;