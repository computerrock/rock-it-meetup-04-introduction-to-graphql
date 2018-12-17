import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {Mutation} from "react-apollo";

import "./Todo.css";
import TOGGLE_TODO_MUTATION from "../../graphql/ToggleTodo";
import GET_TODOS_QUERY from "../../graphql/GetTodos";
import "./Todo.css";

const Todo = props => {
  const {todo} = props;
  const className = classNames("Todo", {
    "Todo--done": todo.isDone
  });

  return (
    <Mutation mutation={TOGGLE_TODO_MUTATION}>
      {mutate => (
        <div
          className={className}
          onClick={() => {
            mutate({
              variables: {
                todoId: todo.id,
                isDone: !todo.isDone
              },
              optimisticResponse: {
                __typename: "Mutation",
                submitComment: {
                  __typename: "Todo",
                  isDone: !todo.isDone
                }
              },
              update: (store, {data: {toggleIsDone}}) => {
                // Read the data from our cache for this query.
                const data = store.readQuery({
                  query: GET_TODOS_QUERY,
                  variables: {userId: 1}
                });

                data.todos = data.todos.map(cacheTodo => {
                  if (todo.id === cacheTodo.id) {
                    cacheTodo.isDone = toggleIsDone.isDone;
                  }

                  return cacheTodo;
                });

                store.writeQuery({
                  query: GET_TODOS_QUERY,
                  variables: {userId: 1},
                  data
                });
              }
            });
          }}
        >
          <p className="Todo__title">{todo.title}</p>
        </div>
      )}
    </Mutation>
  );
};

Todo.defaultProps = {};

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    expireDate: PropTypes.string,
    isDone: PropTypes.bool,
  }).isRequired
};

export default Todo;
