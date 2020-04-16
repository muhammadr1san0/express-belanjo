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
    const { user_id, shipping_price, order_price, total_price, address_delivery, city_delivery, province_delivery, phone_delivery, status, finished_order_date } = req.body;
    const data = {
      user_id,
      shipping_price,
      order_price,
      total_price,
      address_delivery,
      city_delivery,
      province_delivery,
      phone_delivery,
      status,
      finished_order_date
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
    const { user_id, shipping_price, order_price, total_price, address_delivery, city_delivery, province_delivery, phone_delivery, status, finished_order_date } = req.body;
    const id_order = req.params.id_order
    const data = {
      user_id,
      shipping_price,
      order_price,
      total_price,
      address_delivery,
      city_delivery,
      province_delivery,
      phone_delivery,
      status,
      finished_order_date,
      updated_at: new Date()
    }
    ModelOrderDetail.updateOrderDetail(id_order, data)
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