const fs = require('fs');

const { makeExecutableSchema } = require('graphql-tools');

const types = require('./types');
const inputs = require('./inputs');
const { directives, schemaDirectives } = require('./directives');

const base = {
  typeDefs: [directives, types, inputs],
  resolvers: {
    Query: {},
    Mutation: {},
    Subscription: {}
  },
  schemaDirectives
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
    Object.assign(resolvers, model.typeResolvers);

    return base;
  }, base);
};

const schema = buildSchema(__dirname);

module.exports = makeExecutableSchema(schema);
