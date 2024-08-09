import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://amanyademo.in.net/e_vendor_app/api';

const Api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default Api;
