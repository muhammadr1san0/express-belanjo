const connection = require('../configs/db');

module.exports = {
  getAllOrder: () => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM orders", (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  insertOrder: (data) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO orders SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },
  updateOrder: (id_order, data) => {
    return new Promise((resolve, reject) => {
      connection.query('UPDATE orders SET ? WHERE id = ?', [data, id_order], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },
  deleteOrder: (data) => {
    return new Promise((resolve, reject) => {
      connection.query('DELETE FROM orders WHERE id = ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  }
}