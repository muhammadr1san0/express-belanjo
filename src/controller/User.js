const jwt = require('jsonwebtoken')
const MiscHelper = require('../helpers/Helper');
const Auth = require('../helpers/Auth');
const userModels = require('../models/User');
const uuidv4 = require('uuid').v4

module.exports = {
  register: (req, res) => {
    const {phone_number, password, fullname} = req.body;
    Auth.hashPassword(password)
    // console.log(uuidv4())
    .then((res_password)=>{
      const data = {
        id_user: uuidv4(),
        phone_number,
        password: res_password,
        photo: '',
        role_id: 1,
        fullname,
        address: '',
        provinsi: '',
        city: '',
      }
      userModels.register(data)
      .then((response)=>{
        MiscHelper.response(res,response, 201)
      })
      
    })
  },
  login: (req, res)=>{
    const {phone_number, password} = req.body;
    userModels.getUserPhoneNumber(phone_number)
    .then((responseUser)=>{
      if (!responseUser.length) {
        return MiscHelper.response(res, { message: 'Nomor HP anda belum terdaftar' }, 403, true)
      }
      const user = responseUser[0];
      Auth.verifyPassword(password, user.password)
      .then((responseVerify)=>{
        if (responseVerify){
          delete user.password;
          MiscHelper.response(res, user, 200)
        }else{
          MiscHelper.response(res, {message: 'password anda salah'}, 403, true)
        }
      })
      .catch(err=> console.log(err))
    })
    .catch((err)=> console.log(err))
    // Auth.verifyPassword(password).t
  }
}