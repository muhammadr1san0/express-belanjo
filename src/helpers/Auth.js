const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const MiscHelper = require('./Helper')
const NewToken = require('./NewToken')

module.exports = {
  hashPassword: (password) => {
    return new Promise((resolve, reject)=>{
      bcrypt.genSalt(7).then(function (hash) {
        // Store hash in your password DB.
        bcrypt.hash(password, hash).then(function (hash) {
          hash ? resolve(hash) : reject(new Error('hash gagal'))
        });
      });
    })
  },
  verifyPassword: (password, passwordUser) => {
    return new Promise((resolve, reject)=>{
      bcrypt.compare(password, passwordUser).then((verify)=>{
        resolve(verify)
      })
      .catch((err)=>{
        reject(err)
      })
    }) 
  },
  authInfo: (req, res, next) => {
    const headerAuth = req.headers['authorization']
    const allowedAcces = process.env.REQUEST_HEADERS
    if (headerAuth === allowedAcces){
      next()
    }else{
      return MiscHelper.response(res, { message: 'Unauthorized, Need access request headers'}, 401, true)
    }
  },
  accessToken: (req, res, next) => {
    const secretKey = process.env.SECRET_KEY;
    const accessToken = req.headers['xxx-access-token']
    if (!accessToken){
      return MiscHelper.response(res, { message: 'Unauthorized, Need authentikasi T' }, 401, true)
    }
    const token = accessToken.split(' ')[1]
    console.log(token)
    jwt.verify(token, secretKey, (err, decoded)=>{
     if(err){
       if (err.name === 'JsonWebTokenError'){
         return MiscHelper.response(res, null, 401, 'Invalid Token')
       } else if (err.name === 'TokenExpiredError'){
         NewToken.refreshToken(token)
         .then((resToken)=>{
          req.newToken = resToken
           
          next();
         })
         .catch((errToken)=>{
           return MiscHelper.response(res, null, 401, 'Invalid Token Signin again')
         })
       }
     }else{
       console.log(decoded)
       next();
     }
    })
  }

}