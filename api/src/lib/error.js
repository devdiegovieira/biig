
const errorMid = (err, req, res, next) => {
  res.status(400).json(err);
}

module.exports = {errorMid}
