import React from "react";
import "./css/AllTodos.css";

import TodoModel from "./utils/Todo.model";
import Todo from "./Todo";
import PropTypes from "prop-types";

function AllTodos({ data }) {
  const todos = data.todos.map((currentTodo) => {
    const todo = new TodoModel(
      currentTodo.todoDescription,
      currentTodo.todoDateCreated,
      currentTodo.todoCompleted,
      currentTodo._id
    );

    return <Todo todo={todo} key={todo._id} />;
  });

  return (
    <div className="row">
      <h3>Todo List</h3>
      <table className="table table-striped">
        <thead>
          <th>Description</th>
          <th>Date Created</th>
          <th>Action</th>
        </thead>
        <tbody>{todos}</tbody>
      </table>
    </div>
  );
}

AllTodos.propTypes = {
  data: PropTypes.exact({
    todos: PropTypes.arrayOf(
      PropTypes.exact({
        _id: PropTypes.string,
        todoDescription: PropTypes.string,
        todoDateCreated: PropTypes.string,
        todoCompleted: PropTypes.bool,
      })
    ),
  }),
};

export default AllTodos;
