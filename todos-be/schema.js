const { User, UserResolver } = require('./types/User');
const { Todo, TodoResolver } = require('./types/Todo');
const { Tag, TagResolver } = require('./types/Tag');
const db = require('./models/index');


const RootQuery = `
  type RootQuery {
    user(id: Int!): User
    users: [User]
    todos(userId: Int!): [Todo]
    tags: [Tag]
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
    addUser(username: String!): User
    addTodo(userId: Int!, title: String!, expireDate: String): Todo
    addTag(name: String!): Tag
    addTagToTodo(tagId: Int!, todoId: Int!): Todo
    toggleIsDone(todoId: Int): Todo
  }
`;

const resolvers = {
  RootQuery: {
    user: (obj, args, { db }) => db.User.findOne({ where : { id: args.id }}),
    users: (obj, args, { db }) => db.User.findAll(),
    todos: (obj, args, { db }) => db.Todo.findAll({where: { userId: args.userId }}),
    tags: (obj, args, { db }) => db.Tag.findAll(),
  },
  User: UserResolver,
  Tag: TagResolver,
  Todo: TodoResolver,
  Mutation: {
    addUser: (obj, args, { db }) => db.User.create({username: args.username}),
    addTodo: (obj, args, { db }) => db.Todo.create({userId: args.userId, title: args.title, expireDate: args.expireDate, isDone: !!args.isDone }),
    addTag: (obj, args, { db }) => db.Tag.create({name: args.name}),
    addTagToTodo: async (obj, args, { db }) => {
      const todo = await db.Todo.findOne({where: {id: args.todoId}});
      await todo.addTag(args.tagId);
      return todo;
    },
    toggleIsDone: async (obj, args, {db}) => {
      const todo = await db.Todo.findOne({ where: { id: args.todoId } });
      await todo.updateAttributes({isDone: !todo.isDone});
      return todo;
    }
  }
};

module.exports = { 
    typeDefs: [SchemaDefinition, RootQuery, User, Todo, Tag, Mutation], 
    resolvers,
    context: ({ req }) => {
      return { db, req };
    }
};