const types = require('./types');
const inputs = require('./inputs');

const { queries, schema: queriesSchema } = require('./queries');
const { mutations, schema: mutationSchema } = require('./mutations');
const { subscriptions, schema: subscriptionsSchema } = require('./subscriptions');

module.exports = {
  queries,
  mutations,
  subscriptions,
  schemas: [types, inputs, queriesSchema, mutationSchema, subscriptionsSchema]
};
