module.exports = {
  response: (res, result, status, err, newToken=false) => {
    let resultPrint = {}
    if (newToken){
      resultPrint.newtoken = newToken
    }
    resultPrint.status = 'Success'
    resultPrint.status_code = status;
    resultPrint.result = result;
    resultPrint.error = err || null;
    return res.status(resultPrint.status_code).json(resultPrint)
  }
}