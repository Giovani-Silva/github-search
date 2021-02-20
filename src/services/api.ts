import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
});

const token =
  process.env.USER_SEARCH_OAUTH || 'f7b99201669fe98b8a9876324cce92ce7a22de2e';
if (token) {
  api.defaults.headers.common.Authorization = `token ${token}`;
}

export default api;
