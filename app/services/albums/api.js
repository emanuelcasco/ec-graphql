const axios = require('axios');

const logger = require('../../libs/logger');

const requestData = config =>
  JSON.stringify({ method: config.method, baseURL: config.baseURL, url: config.url });

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 5000
});

api.interceptors.request.use(
  config => {
    logger.info(`REQUEST: ${requestData(config)}`);
    return config;
  },
  error => Promise.reject(error)
);

module.exports = api;
