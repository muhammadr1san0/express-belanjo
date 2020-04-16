const userModels = require('../models/User');
const jwt = require('jsonwebtoken');
module.exports = {
  refreshToken: (token)=>{
    return new Promise ((resolve, reject)=>{
      userModels.getUserByToken(token)
      .then((res)=>{
        const user= res[0]
        const newToken = jwt.sign({ id_user: user.id_user, xxpnxx: user.phone_number }, process.env.SECRET_KEY, { expiresIn: '60000' })
        userModels.editUserById(user.id_user, { token: newToken})
        .then((resupdate)=>{
          console.log('udateuser')
          console.log(resupdate)
        })
        .catch((errupdate)=>{
          console.log(errupdate)
        })
        resolve(newToken)
      })
      .catch((err)=>{
        reject(err)
      })
    })
  }
}