// const { ForbiddenError } = require('apollo-server');

const Tag = `
    type Tag {
        id: Int
        name: String,
        todos: [Todo]
    }
`;

const TagResolver = {
    todos: (obj, args, { db }) => obj.todos && obj.todos.length > 0 ? obj.todos : obj.getTodos(),
};

module.exports = {
    Tag,
    TagResolver,
};