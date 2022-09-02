const express = require('express');
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

    return createAuth(user);

  } catch (error) {
    next(error)
  }
});

module.exports = router;