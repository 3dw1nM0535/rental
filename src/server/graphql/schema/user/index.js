const { gql } = require('apollo-server');

module.exports = gql`
  type User {
    email: String!
    username: String!
  }

  extend type Query {
    getUsers: [User]
  }
`;
