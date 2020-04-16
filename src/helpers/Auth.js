const bcrypt = require('bcrypt');
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
      return MiscHelper.response(res, { message: 'Unauthorized, Need access token !'}, 401, true)
    }
  }
}