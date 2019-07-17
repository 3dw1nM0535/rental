const { ApolloServer } = require('apollo-server');

// Import Schema and Resolver
const Schema = require('../graphql/schema');
const resolvers = require('../graphql/resolvers');

module.exports = () => new ApolloServer({
  typeDefs: Schema,
  resolvers
});
