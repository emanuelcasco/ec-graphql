const { gql } = require('apollo-server');

module.exports = gql`
  type Album {
    id: ID!
    title: String!
    artist: Int!
    photos: [Photo!]!
  }

  type Photo {
    id: ID!
    albumId: Int!
    title: String!
    url: String!
    thumbnailUrl: String!
  }
`;
