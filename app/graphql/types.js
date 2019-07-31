const { gql } = require('apollo-server');

module.exports = gql`
  type Query
  type Mutation
  type Subscription

  type User {
    firstName: String!
    lastName: String!
    username: String!
    email: String!
    password: String!
    id: ID!
  }

  type UserResponse {
    firstName: String!
    lastName: String!
    username: String!
    email: String!
    id: ID!
  }

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

  type AccessToken {
    accessToken: String!
    refreshToken: String!
    expiresIn: Int!
  }

  enum SortValue {
    ASC
    DES
  }
`;
