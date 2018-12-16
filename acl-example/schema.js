const abstractResolvers = require('./abstractresolvers');

const RootQuery = `
  type RootQuery {
    adminOnly: String,
    user: String
    anonymous: String,
  }
`;

const SchemaDefinition = `
  schema {
    query: RootQuery,
    mutation: Mutation,
  }
`;

const Mutation = `
  type Mutation {
    login(username: String!, password: String!): Boolean
  }
`;

const resolvers = {
  RootQuery: {
    adminOnly: abstractResolvers.onlyAdminResolver.createResolver(() => 'Hello admin'),
    user: abstractResolvers.authenticatedResolver.createResolver(() => 'Hello user'),
    anonymous: abstractResolvers.baseResolver.createResolver(() => 'Hello anonymous'),
  },
  Mutation: {
    login : (obj, args, { db }) => true,
  }
};

module.exports = { 
    typeDefs: [SchemaDefinition, RootQuery, Mutation], 
    resolvers,
    context: ({ req }) => {
      return { db: {}, userType: req.headers.authorization };
    }
};