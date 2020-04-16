const ModelOrderDetail = require('../models/OrderDetail');
const MiscHelper = require('../helpers/Helper');
module.exports = {
  getAllOrderDetail: (req, res) => {
    ModelOrderDetail.getAllOrderDetail()
      .then((result) => {
        MiscHelper.response(res, result, 200, req.newToken ? req.newToken : false)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  getOrderDetailById: (req, res) => {
    const id_order = req.params.id_order
    ModelOrderDetail.getOrderDetailById(id_order)
      .then((result) => {
        MiscHelper.response(res, result, 200, req.newToken ? req.newToken : false)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  insertOrderDetail: (req, res) => {
    const { order_id, product_id, quantity } = req.body;
    const data = {
      order_id,
      product_id,
      quantity
    }
    ModelOrderDetail.insertOrderDetail(data)
      .then((result) => {
        MiscHelper.response(res, result, 200, req.newToken ? req.newToken : false)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  updateOrderDetail: (req, res) => {
    const { order_id, product_id, quantity } = req.body;
    const id_orderdetail = req.params.id_orderdetail
    const data = {
      order_id,
      product_id,
      quantity
    }
    ModelOrderDetail.updateOrderDetail(id_orderdetail, data)
      .then((result) => {
        MiscHelper.response(res, result, 200, req.newToken ? req.newToken : false)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  deleteOrderDetail: (req, res) => {
    const id_order = req.params.id_order
    ModelOrderDetail.deleteOrderDetail(id_order)
      .then((result) => {
        MiscHelper.response(res, result, 200, req.newToken ? req.newToken : false)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}