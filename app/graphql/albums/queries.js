const { gql } = require('apollo-server');

const resolvers = require('./resolvers');

module.exports = {
  queries: {
    getAlbum: resolvers.getAlbum,
    getAllAlbums: resolvers.getAllAlbums
  },
  schema: gql`
    extend type Query {
      getAlbum(id: ID!): Album!
      getAllAlbums(offset: Int, limit: Int, sort: SortingInput, filter: FilterInput): [Album]
    }
  `
};
