const ModelCategory = require('../models/CategoryProduct');
const MiscHelper = require('../helpers/Helper');
module.exports = {
  getAllCategory: (req, res) => {
    ModelCategory.getAllOrder()
      .then((result) => {
        MiscHelper.response(res, result, 200, req.newToken ? req.newToken : false)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  getCategoryById: (req, res) => {
    const id_order = req.params.id_order
    ModelCategory.getOrderById(id_order)
      .then((result) => {
        MiscHelper.response(res, result, 200, req.newToken ? req.newToken : false)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  insertCategory: (req, res) => {
    const { name_category } = req.body;
    const data = {
      name_category
    }
    ModelCategory.insertCategory(data)
      .then((result) => {
        MiscHelper.response(res, result, 200, req.newToken ? req.newToken : false)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  updateCategory: (req, res) => {
    const { name_category } = req.body;
    const id_category = req.params.id_category
    const data = {
      name_category
    }
    ModelCategory.updateCategory(id_category, data)
      .then((result) => {
        MiscHelper.response(res, result, 200, req.newToken ? req.newToken : false)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  deleteCategory: (req, res) => {
    const id_category = req.params.id_category
    ModelCategory.deleteCategory(id_category)
      .then((result) => {
        MiscHelper.response(res, result, 200, req.newToken ? req.newToken : false)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}