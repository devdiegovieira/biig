const private = "friePotato123";
const jwt = require("jsonwebtoken");

const privateRoute = async (req, res, next) => {
  const jwt = req.headers["authorization"];

  try {
    req.user = await jwt.verify( jwt, private );
    next();
  } catch (error) {
    res.status(401).send('Authorization needed!');
  }
};


const createAuth = async (userData = {}) => {
  return await jwt.sign(userData, chavePrivada, {expiresIn: '24h'});
}

module.exports = { privateRoute, createAuth }