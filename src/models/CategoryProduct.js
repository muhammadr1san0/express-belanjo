const connection = require('../configs/db');

module.exports = {
  getAllCategory: () => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM product_categories", (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getCategoryById:(id_category) => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM product_categories WHERE id = ?", id_category, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  insertCategory: (data) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO product_categories SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },
  updateCategory: (id_order, data) => {
    return new Promise((resolve, reject) => {
      connection.query('UPDATE product_categories SET ? WHERE id = ?', [data, id_order], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },
  deleteCategory: (data) => {
    return new Promise((resolve, reject) => {
      connection.query('DELETE FROM product_categories WHERE id = ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  }
}