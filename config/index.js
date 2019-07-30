const { assignObject } = require('../utils');

const ENVIRONMENT = process.env.NODE_ENV || 'development';

if (ENVIRONMENT !== 'production') {
  require('dotenv').config();
}

const configFile = `./${ENVIRONMENT}`;

const config = {
  common: {
    database: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD
    },
    api: {
      bodySizeLimit: process.env.API_BODY_SIZE_LIMIT,
      parameterLimit: process.env.API_PARAMETER_LIMIT,
      port: process.env.PORT
    },
    rollbar: {
      accessToken: process.env.ROLLBAR_ACCESS_TOKEN,
      environment: process.env.ROLLBAR_ENV
    },
    session: {
      header_name: 'authorization',
      secret: process.env.NODE_API_SESSION_SECRET
    }
  }
};

const customConfig = require(configFile).config;
module.exports = assignObject(customConfig, config);
