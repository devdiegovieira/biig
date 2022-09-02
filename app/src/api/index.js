const axios = require('axios').default;

export default axios.create({
  baseURL: `http://${!process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? 'localhost' : '35.198.58.103'}:2530`,
  // timeout: 1000,
  headers: {
    'Authorization': ''
  }
});
