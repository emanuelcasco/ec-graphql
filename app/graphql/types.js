const { gql } = require('apollo-server');

module.exports = gql`
  type Query
  type Mutation
  type Subscription

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
