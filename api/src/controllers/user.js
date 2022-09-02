const express = require('express');
const router = express.Router();


router.get('/', async (req, res, next) => {
  try {
    throw 'teste teste'
  } catch (error) {
    next(error)
  }

});


router.post('/', async (req, res) => {

  let userColl = req.mongoConn.collection('user');

  let user = await userColl.insertOne(req.query)

  res.status(200).json({ userId: user })

});



module.exports = router;