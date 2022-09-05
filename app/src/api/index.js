const axios = require('axios').default;
const { toast } = require('react-toastify');

let instance = axios.create({
  baseURL: !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? 'http://localhost:2530' : 'https://api.biig.com.br',
  // timeout: 1000,
  headers: {
    'Authorization': (JSON.parse(localStorage.getItem('user')) || {}).auth 
  }
});

instance.interceptors.response.use(function (response) {
  return response.data ? response.data : response;
}, function (err) {
  toast.error(err)

  return Promise.reject(
    err.message ? 
      err.message : 
      err.response ? 
        `${err.response.status} - ${err.response.message}` : 
        JSON.stringify(err));
});

export default instance;
