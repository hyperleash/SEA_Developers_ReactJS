import React from "react";
import PropTypes from "prop-types";
import TodoModel from "./utils/Todo.model";

function Todo({ todo }) {
  const dateCreated = new Date(todo.todoDateCreated).toUTCString();
  const completedClassName = todo.todoCompleted ? "completed" : "";
  const completed = todo.todoCompleted ? "N/A" : <a href="/">Edit</a>;
  //   Ask Victoria

  return (
    <tr>
      <td className={completedClassName}>{todo.todoDescription}</td>
      <td className={completedClassName}>{dateCreated}</td>
      <td>{completed}</td>
    </tr>
  );
}

Todo.propTypes = {
  todo: PropTypes.instanceOf(TodoModel),
};

export default Todo;
