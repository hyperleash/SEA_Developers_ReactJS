import React, { useState } from "react";
import DateCreated from "./utils/DateCreated";

function TodoForm() {
  const [todoDescription, setTodoDescription] = useState("");
  const [todoDateCreated, setTodoDateCreated] = useState(null);
  const [todoCompleted, setTodoCompleted] = useState(false);
  return (
    <form>
      <div className="form-group">
        <label for="todoDescription">Description:&nbsp;</label>
        <input
          className="form-control"
          name="todoDescription"
          placeholder="Todo Description"
          value={todoDescription}
          onChange={(e) => {
            setTodoDescription(e.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <label for="todoDateCreated">Created on:&nbsp;</label>
        <DateCreated
          updateDateCreated={(dateCreated) => {
            setTodoDateCreated(dateCreated);
          }}
        />
      </div>
      <div className="form-group">
        <label for="todoCompleted">Completed:&nbsp;</label>
        <input
          checked={todoCompleted}
          type="checkbox"
          name="todoCompleted"
          onChange={(e) => {
            setTodoCompleted(e.target.checked);
          }}
        />
      </div>
      <div className="form-group">
        <input
          disabled={!todoDescription}
          type="submit"
          value="Submit"
          className={`btn ${!todoDescription ? "btn-danger" : "btn-primary"}`}
        />
      </div>
    </form>
  );
}

export default TodoForm;
