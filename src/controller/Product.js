const productModel = require('../models/Product');
const MiscHelper = require('../helpers/Helper');
module.exports = {
  getAllProduct: (req, res)=>{
    productModel.getAllProduct()
    .then((result)=>{
      MiscHelper.response(res, result, 200, req.newToken ? req.newToken : false)
    })
    .catch((err)=>{
      console.log(err)
    })
  },
  getProductById: (req, res) => {
    const id_product = req.params.id_product
    productModel.getProductById(id_product)
      .then((result) => {
        MiscHelper.response(res, result, 200, req.newToken ? req.newToken : false)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  getProduct:(req,res) =>{
    const search = req.query.search
    const page = req.query.page
    const sort = req.query.sort

    productModel.getProduct(page, search, sort)
      .then((result) => {
        MiscHelper.response(res, result, 200, req.newToken ? req.newToken : false)
      })
      .catch((err) => {
        console.log(err)
      }) 
  },
  insertProduct:(req, res)=>{
    const {product_name, id_category, description, image, unit, price} = req.body;
    const data = {
      product_name,
      id_category,
      description,
      image,
      unit,
      price
    }
    productModel.insertProduct(data)
    .then((result)=>{
      MiscHelper.response(res, result, 200, req.newToken ? req.newToken : false)
    })
    .catch((err)=>{
      console.log(err)
    })
  },
  updateProduct: (req, res)=>{
    const {product_name, id_category, description, image, unit, price } = req.body;
    const id_product = req.params.id_product
    const data = {
      product_name,
      id_category,
      description,
      image,
      unit,
      price
    }
    productModel.updateProduct(id_product, data)
    .then((result)=>{
      MiscHelper.response(res, result, 200, req.newToken ? req.newToken : false)
    })
    .catch((err)=>{
      console.log(err)
    })
  },
  deleteProduct: (req, res)=>{
    const id_product = req.params.id_product
    productModel.deleteProduct(id_product)
  }
}