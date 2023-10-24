// First we need to import axios.js
import axios from 'axios';

// Next we make an 'instance' of it
const instance = axios.create({
  baseURL: 'http://localhost:3100/api',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
    // 'Content-Type': 'multipart/form-data'
    // 'Content-Type': 'application/json'
  }
});

// Where you would set stuff like your 'Authorization' header, etc ...
instance.defaults.headers.common['Authorization'] = 'AUTH_TOKEN_FROM_INSTANCE';


export default instance;

// axios.create will create a new instance of the axios service and return a promise