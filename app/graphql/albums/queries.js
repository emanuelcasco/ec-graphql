const { gql } = require('apollo-server');

const resolvers = require('./resolvers');

module.exports = {
  queries: {
    getAlbum: resolvers.getAlbum,
    getAlbums: resolvers.getAlbums
  },
  schema: gql`
    extend type Query {
      getAlbum(id: ID!): Album!
      getAlbums(offset: Int, limit: Int, sort: SortingInput, filter: FilterInput): [Album]
    }
  `
};
