import {gql} from "apollo-boost";

const toggleTodoMutation = gql`
    mutation ToggleTodo($todoId: Int!) {
        toggleIsDone(todoId: $todoId) {
            isDone
        }
    }
`;

export default toggleTodoMutation;
