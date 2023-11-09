import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5004', 
  timeout: 2000, //All request will wait 2 seconds before timeout
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
});

const methods = {
  get: (url, config) => instance.get(url, config),
  post: (url, data, config) => instance.post(url, data, config),
  put: (url, data, config) => instance.put(url, data, config),
  patch: (url, data, config) => instance.patch(url, data, config),
  delete: (url, config) => instance.delete(url, config),
};

export default methods;