const express = require('express');
const { createAuth } = require('../lib/auth');
const router = express.Router();


router.post('/login', async (req, res, next) => {
  try { 
    let { mail, password } = req.body;
    if (!mail || !password) throw 'Mail and password are needed!';

    let db = req.mongoConn;
    let userColl = db.collection('user');

    let user = await userColl.findOne({mail, password});
    if (!user) throw 'User or password invalid';

    delete user.password;

    res.status(200).json({...user, auth: await createAuth(user)});

  } catch (error) {
    next(error)
  }
}); 

module.exports = router;