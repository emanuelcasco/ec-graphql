const { makeExecutableSchema } = require('graphql-tools');

const types = require('./types');
const inputs = require('./inputs');

const albums = require('./albums');
const users = require('./users');
const healthCheck = require('./healthCheck');

const typeDefs = [types, inputs, ...albums.schemas, ...users.schemas, ...healthCheck.schemas];

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers: {
    Query: {
      ...albums.queries,
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
