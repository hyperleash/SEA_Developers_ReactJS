import React from "react";
import { create } from "react-test-renderer";
import AllTodos from "../Components/AllTodos";
import TodoModel from "../Components/utils/Todo.model";
import Todo from "../Components/Todo";

jest.mock("../Components/utils/Todo.model", () => {
  return class TodoModel {
    constructor() {
      this.todoDescription = "Test Todo";
      this.todoDateCreated = "2019-05-04T15:30:00.000Z";
      this.todoCompleted = true;
    }
  };
});

test("it should render 2 tds with className completed if props.todo.todoCompleted is true", () => {
  const testTodo = new TodoModel();
  const testRenderer = create(<Todo todo={testTodo} />);
  const testInstance = testRenderer.root;

  const cells = testInstance.findAllByType("td");

  for (let i = 0; i < cells.length - 1; i++) {
    const cell = cells[i];
    expect(cell.props.className).toBe("completed");
  }
});

test("it should render 'N/A' in the last td of the row if props.todo.todoCompleted is true", () => {
  const testTodo = new TodoModel();
  const testRenderer = create(<Todo todo={testTodo} />);

  const testInstance = testRenderer.root;

  const cells = testInstance.findAllByType("td");

  expect(cells.at(-1).children[0]).toBe("N/A");
});

test("it should render 'Edit' in the last td of the row if props.todo.todoCompleted is false", () => {
  let testTodo = new TodoModel();
  testTodo.todoCompleted = false;

  const testRenderer = create(<Todo todo={testTodo} />);

  const testInstance = testRenderer.root;

  const link = testInstance.findByType("a");

  expect(link.children).toContain("Edit");
});
