// const { ForbiddenError } = require('apollo-server');

const Todo = `
    type Todo {
        id: Int
        title: String
        user: User,
        expireDate: String,
        isDone: Boolean,
        tags: [Tag]
    }
`;

const TodoResolver = {
    user: (obj, args, { db }) => db.User.findOne({where: {id: obj.userId}}),
    tags: (obj, args, { db }) => obj.tags && obj.tags.length > 0 ? obj.tags : obj.getTags(),
};

module.exports = {
    Todo,
    TodoResolver,
};