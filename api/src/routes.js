const user = require('./controllers/user');
const auth = require('./controllers/auth');
const { privateRoute } = require('./lib/auth');


module.exports = (app) => {
  app.use('/auth', auth);
  app.use('/user', privateRoute, user);
  
}