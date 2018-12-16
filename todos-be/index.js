const { ApolloServer } = require('apollo-server');
const schema = require('./schema');

const server = new ApolloServer({
  ...schema,
  // formatError: error => {
  //   console.log(error);
  //   return new Error('Internal server error');
  // },
});

server.listen({port: 4000}).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});