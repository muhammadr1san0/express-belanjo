const connection = require('../configs/db');

module.exports = {
  getAllOrderDetail: () => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM order_details", (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  insertOrderDetail: (data) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO order_details SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },
  updateOrderDetail: (id_order, data) => {
    return new Promise((resolve, reject) => {
      connection.query('UPDATE order_details SET ? WHERE id = ?', [data, id_order], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },
  deleteOrderDetail: (data) => {
    return new Promise((resolve, reject) => {
      connection.query('DELETE FROM order_details WHERE id = ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  }
}