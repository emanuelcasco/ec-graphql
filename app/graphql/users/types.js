const { gql } = require('apollo-server');

module.exports = gql`
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
`;
