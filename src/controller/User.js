const jwt = require('jsonwebtoken')
const MiscHelper = require('../helpers/Helper');
const Auth = require('../helpers/Auth');
const userModels = require('../models/User');
const uuidv4 = require('uuid').v4

module.exports = {
  register: async (req, res) => {
    const {phone_number, password, fullname} = req.body;
    let user = [];
    try {
      user = await userModels.getUserPhoneNumber(phone_number)
    } catch (error) {
      console.log(error)
    }
    if (user.length>0){
      return MiscHelper.response(res, { message: 'User sudah terdaftar' }, 403, true, req.newToken ? req.newToken : false)
    }
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
        token: '',
      }
      userModels.register(data)
      .then((response)=>{
        MiscHelper.response(res, response, 201, req.newToken ? req.newToken: false)
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
        console.log(responseVerify)
        if (!responseVerify){
          return MiscHelper.response(res, {message: 'password anda salah'}, 403, true)
        }
        delete user.password;
        user.token = jwt.sign({ id_user: user.id_user, xxpnxx: user.phone_number }, process.env.SECRET_KEY, { expiresIn: '1m' } )
        userModels.editUserById(user.id_user, {token:user.token})
        MiscHelper.response(res, user, 200)
      })
      .catch(err=> console.log(err))
    })
    .catch((err)=> console.log(err))
    // Auth.verifyPassword(password).t
  }
}