const connection = require('../configs/db');

module.exports = {
  getAllProduct: () => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM products", (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getProduct: (page, search, sort) => {
    return new Promise((resolve, reject) => {
      if(page){
        if (search){
          connection.query("SELECT * FROM products WHERE product_name LIKE ? ORDER BY created_at desc LIMIT" + (page * 20 - 20) + ", 20", search, (err, result) => {
            if (!err) {
              resolve(result)
            } else {
              reject(new Error(err))
            }
          })
        }else{
          connection.query("SELECT * FROM products ORDER BY created_at desc LIMIT" + (page * 20 - 20) + ", 20", (err, result) => {
            if (!err) {
              resolve(result)
            } else {
              reject(new Error(err))
            }
          })
        }
      }
    })
  },
}