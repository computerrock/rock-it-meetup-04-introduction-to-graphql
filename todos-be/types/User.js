const { ForbiddenError } = require('apollo-server');
const User = `
    type User {
        id: Int
        username: String
        todos: [Todo],
        forbidden: String
    }
`;

const UserResolver = {
    todos: (obj, args, { db, req  }) => {
        if (obj.todos)
            return obj.todos;
        return db.Todo.findAll(
            {
                where: {
                    userId: obj.id
                }
            }
        );
    },
    forbidden: () => {
        throw new ForbiddenError();
    }
};

module.exports = {
    User,
    UserResolver,
};