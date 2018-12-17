import React from "react";
import classNames from "classnames";
import {Mutation} from "react-apollo";
import "./AddTodo.css";

// GraphQL
import ADD_TODO_MUTATION from "../../graphql/AddTodo";
import GET_TODOS_QUERY from "../../graphql/GetTodos";

class AddTodo extends React.Component {
  state = {
    todo: ""
  };

  handleUserInput = event => {
    this.setState({
      todo: event.target.value
    });
  };

  addToDo = (event, mutate) => {
    event.preventDefault();

    // Check if the todo title is empty
    if (this.state.todo === "") {
      return;
    }

    // Send the to do to the server
    mutate({
      variables: {
        userId: 1,
        title: this.state.todo
      }
    });
  };

  render() {
    const className = classNames("AddTodo");

    return (
      <div className={className}>
        <Mutation mutation={ADD_TODO_MUTATION} refetchQueries={[
          {
            query: GET_TODOS_QUERY,
            variables: {
              userId: 1
            }
          }
        ]}>
          {mutate => (
            <form onSubmit={(event) => this.addToDo(event, mutate)}>
              <input
                className="AddTodo__input"
                type="text"
                placeholder="What do you have to do?"
                onChange={this.handleUserInput}
                value={this.state.title}
              />
            </form>
          )}
        </Mutation>
      </div>
    );
  }
}

AddTodo.defaultProps = {};

AddTodo.propTypes = {};

export default AddTodo;
