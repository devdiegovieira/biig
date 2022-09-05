const axios = require('axios').default;
const { toast } = require('react-toastify');

let instance = axios.create({
  baseURL: `http://${!process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? 'localhost' : '35.198.58.103'}:2530`,
  // timeout: 1000,
  headers: {
    'Authorization': JSON.parse(localStorage.getItem('user')).auth 
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
