import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./css/AddEditTodo.css";
import generateTodoId from "./utils/generateId";
import TodoForm from "./TodoForm";
import TodoModel from "./utils/Todo.model";
import Modal from "./utils/Modal";
import { useParams, Navigate } from "react-router-dom";

const AddEditTodo = ({ submitAction, data }) => {
  const { _id } = useParams();
  console.log(_id);
  console.log(data);
  const [todo, setTodo] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!_id) {
      console.log("Setting todo to null...");
      setTodo(null);
    }
    console.log(!todo?.error && _id);
    if (!todo?.error && _id) {
      const todoToEdit = data?.todos?.find(
        (currentTodo) => currentTodo._id === _id
      );
      if (todoToEdit) {
        setTodo(todoToEdit);
        console.log(todoToEdit);
      } else {
        console.log(_id);
        setTodo({ error: "Todo could not be found" });
      }
    }
  }, [_id, data, todo]);

  const submitTodo = (
    todoDescription,
    todoDateCreated,
    todoCompleted,
    todoId
  ) => {
    const todoToSubmit = new TodoModel(
      todoDescription,
      new Date(todoDateCreated).toISOString(),
      todoCompleted,
      todoId ? todoId : generateTodoId()
    );
    submitAction(todoToSubmit);
    setSubmitted(true);
  };

  return (
    <>
      {submitted && <Navigate to="/" />}
      {todo?.error && (
        <Modal handleClose={() => setTodo(null)} message={todo.error} />
      )}
      <div className="addEditTodo row">
        <h3>{_id ? `Edit` : `Add`} Todo</h3>
      </div>
      <TodoForm submitAction={submitTodo} todo={todo} />
    </>
  );
};

AddEditTodo.propTypes = {
  submitTodo: PropTypes.func.isRequired,

  todo: PropTypes.exact({
    _id: PropTypes.string,
    todoDescription: PropTypes.string,
    todoDateCreated: PropTypes.string,
    todoCompleted: PropTypes.bool,
  }),
};

export default AddEditTodo;
