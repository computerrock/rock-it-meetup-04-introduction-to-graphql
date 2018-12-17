import React from "react";
import Title from "../components/Title/Title";
import AddTodo from "../components/AddTodo/AddTodo";
import TodoList from "../components/TodoList/TodoList";
import "../style/ToDoOverview.css";

const TodoOverviewPage = () => (
  <div className="TodoOverviewPage">
    <Title align="center">Your To Do List</Title>

    <AddTodo/>

    <TodoList/>
  </div>
);

export default TodoOverviewPage;
