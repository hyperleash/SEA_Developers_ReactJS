import React from "react";
import PropTypes from "prop-types";
import TodoModel from "./utils/Todo.model";
import { NavLink } from "react-router-dom";

const Todo = ({ todo }) => {
  const dateCreated = new Date(Date.parse(todo.todoDateCreated)).toUTCString();
  const completedClassName = todo.todoCompleted ? `completed` : ``;
  let completed;

  if (todo.todoCompleted) {
    completed = `N/A`;
  } else {
    completed = (
      <NavLink to={`/edit/${todo._id}`} className="link">
        Edit
      </NavLink>
    );
  }
  return (
    <tr>
      <td className={completedClassName}>{todo.todoDescription}</td>
      <td className={completedClassName}>{dateCreated}</td>
      <td>{completed}</td>
    </tr>
  );
};

Todo.propTypes = {
  todo: PropTypes.instanceOf(TodoModel),
};

export default Todo;
