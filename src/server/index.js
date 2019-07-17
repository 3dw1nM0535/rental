const configGraphQLServer = require('./config/configServer');

const server = configGraphQLServer();

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
