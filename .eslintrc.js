const defaultConfig = require('eslint-config-wolox-node');

const { assignObject } = require('./utils');

const customConfig = {
  rules: {
    "curly": 0,
    "global-require": 0,
    "arrow-body-style": 0
  }
};

module.exports = assignObject(customConfig, defaultConfig);
