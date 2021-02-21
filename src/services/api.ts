import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
});

const token = process.env.USER_SEARCH_OAUTH;
if (token) {
  api.defaults.headers.common.Authorization = `token ${token}`;
}

export default api;
