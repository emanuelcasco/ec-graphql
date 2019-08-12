const axios = require('axios');

const logger = require('../../libs/logger');
const constants = require('../../constants');

const requestData = config =>
  JSON.stringify({ method: config.method, baseURL: config.baseURL, url: config.url });

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: constants.DEFAULT_REQUEST_TIMEOT
});

api.interceptors.request.use(
  config => {
    logger.info(`REQUEST: ${requestData(config)}`);
    return config;
  },
  error => Promise.reject(error)
);

module.exports = api;
