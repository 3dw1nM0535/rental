const { ApolloServer, gql } = require('apollo-server');

const users = [
  {
    email: 'user1@email.com',
    username: 'username1'
  },
  {
    email: 'user1@email.com',
    username: 'user2'
  }
];

const typeDefs = gql`
  type User {
    email: String!,
    username: String!
  }

  type Query {
    users: [User]
  }
`;

const resolvers = {
  Query: {
    users: () => users
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
