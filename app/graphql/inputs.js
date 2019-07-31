const { gql } = require('apollo-server');

module.exports = gql`
  input SortingInput {
    field: String!
    order: SortValue
  }

  input FilterInput {
    field: String!
    value: String!
  }
`;
