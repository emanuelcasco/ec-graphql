const { gql } = require('apollo-server');

module.exports = gql`
  input UserInput {
    firstName: String!
    lastName: String!
    username: String!
    email: String! @constraint(format: "email", pattern: "^.+@wolox.(co|com.ar)$")
    password: String! @constraint(minLength: 8, pattern: "^[0-9a-zA-Z]*$")
  }

  input LoginInput {
    username: String!
    password: String!
  }
`;
