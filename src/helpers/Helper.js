module.exports = {
  response: (res, result, status, err) => {
    let resultPrint = {}
    resultPrint.status = 'Success'
    resultPrint.status_code = status;
    resultPrint.result = result;
    resultPrint.error = err || null;
    return res.status(resultPrint.status_code).json(resultPrint)
  }
}