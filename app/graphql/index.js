const { makeExecutableSchema } = require('graphql-tools');
const types = require('./types');
const inputs = require('./inputs');
const users = require('./users');
const healthCheck = require('./healthCheck');

const typeDefs = [types, inputs, ...users.schemas, ...healthCheck.schemas];

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers: {
    Query: {
      ...users.queries,
      ...healthCheck.queries
    },
    Mutation: {
      ...users.mutations
    },
    Subscription: {
      ...users.subscriptions
    }
  }
});
