import {gql} from "apollo-boost";

const addTodoMutation = gql`
    mutation addTodo($userId: Int!, $title: String!, $expireDate: String) {
        addTodo(userId: $userId, title: $title, expireDate: $expireDate) {
            id
            title
            expireDate
            isDone
            tags {
                id
                name
            }
        }
    }
`;

export default addTodoMutation;
