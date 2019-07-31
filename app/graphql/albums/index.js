const types = require('./types');
const { queries, schema: queriesSchema } = require('./queries');

module.exports = {
  queries,
  schemas: [types, queriesSchema]
};
