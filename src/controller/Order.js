const ModelOrder = require('../models/Order');
const MiscHelper = require('../helpers/Helper');
module.exports = {
  getAllOrder: (req, res) => {
    orderModel.getAllOrder()
      .then((result) => {
        MiscHelper.response(res, result, 200, req.newToken ? req.newToken : false)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  getOrderById: (req, res) =>{
    const id_order = req.params.id_order
    orderModel.getOrderById(id_order)
      .then((result) => {
        MiscHelper.response(res, result, 200, req.newToken ? req.newToken : false)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  insertOrder: (req, res) => {
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
    orderModel.insertOrder(data)
      .then((result) => {
        MiscHelper.response(res, result, 200, req.newToken ? req.newToken : false)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  updateOrder: (req, res) => {
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
    orderModel.updateOrder(id_order, data)
      .then((result) => {
        MiscHelper.response(res, result, 200, req.newToken ? req.newToken : false)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  deleteOrder: (req, res) => {
    const id_order = req.params.id_order
    orderModel.deleteOrder(id_order)
  }
}