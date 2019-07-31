const { gql } = require('apollo-server');

module.exports = gql`
  input UserInput {
    firstName: String!
    lastName: String!
    username: String!
    email: String!
    password: String!
  }

  input LoginInput {
    username: String!
    password: String!
  }

  input SortingInput {
    field: String!
    order: SortValue
  }

  input FilterInput {
    field: String!
    value: String!
  }
`;
