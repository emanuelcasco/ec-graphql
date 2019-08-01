const fs = require('fs');

const { makeExecutableSchema } = require('graphql-tools');

const types = require('./types');
const inputs = require('./inputs');

const base = {
  typeDefs: [types, inputs],
  resolvers: {
    Query: {},
    Mutation: {},
    Subscription: {}
  }
};

const getModels = source => {
  return fs
    .readdirSync(source, { withFileTypes: true })
    .filter(dir => dir.isDirectory())
    .map(dir => dir.name)
    .map(dir => require(`./${dir}`));
};

const buildSchema = baseDirectory => {
  const models = getModels(baseDirectory);

  return models.reduce(({ typeDefs, resolvers }, model) => {
    typeDefs.push(...model.schemas);
    Object.assign(resolvers.Query, model.queries);
    Object.assign(resolvers.Mutation, model.mutations);
    Object.assign(resolvers.Subscription, model.subscriptions);

    return base;
  }, base);
};

const schema = buildSchema(__dirname);

module.exports = makeExecutableSchema(schema);
