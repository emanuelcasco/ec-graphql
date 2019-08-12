/* eslint-disable class-methods-use-this */
const { gql } = require('apollo-server');
const ConstraintDirective = require('graphql-constraint-directive');

module.exports = {
  schemaDirectives: {
    constraint: ConstraintDirective
  },
  directives: gql`
    directive @constraint(pattern: String, format: String, minLength: Int) on INPUT_FIELD_DEFINITION
  `
};
