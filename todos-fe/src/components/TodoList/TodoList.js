import React from "react";
import classNames from "classnames";
import {Query} from "react-apollo";
import Todo from "../Todo/Todo";
import "./TodoList.css";

// GraphQL
import GET_TODOS_QUERY from "../../graphql/GetTodos";

const TodoList = () => {
  const className = classNames("TodoList");
  return (
    <div className={className}>
      <Query query={GET_TODOS_QUERY} variables={{userId: 1}}>
        {({data: {todos}, loading}) => {
          if (loading) {
            return <p>Loading...</p>;
          }

          if (todos && todos.length === 0) {
            return <p>You do not have anything to do right now.</p>
          }

          return todos.map(todo => <Todo key={todo.id} todo={todo}/>);
        }}
      </Query>
    </div>
  );
};

TodoList.defaultProps = {};

TodoList.propTypes = {};

export default TodoList;
