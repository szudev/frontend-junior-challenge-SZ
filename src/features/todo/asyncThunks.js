import { apiURL } from "api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk(`todo/fetchTodos`, async () => {
  const response = await fetch(apiURL.todos);
  if (!response.ok) throw new Error("Error on fetching the data of todos.");
  const data = await response.json();
  return [...data];
});

export const toggleCheckTodoById = createAsyncThunk(
  `todo/toggleCheckTodoById`,
  async ({ todoId, isCheck }) => {
    const response = await fetch(`${apiURL.todos}/${todoId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ checked: isCheck }),
    });
    if (!response.ok)
      throw new Error("Error on PATCH the todo's checked status.");

    const data = await response.json();
    return data;
  }
);

export const addNewTodo = createAsyncThunk(
  `todo/addNewTodo`,
  async ({ todoId, label }) => {
    const newTodo = {
      id: todoId,
      label,
      checked: false,
    };
    const response = await fetch(apiURL.todos, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo),
    });
    if (!response.ok) throw new Error("Error on POST a new todo.");
    const data = await response.json();
    return data;
  }
);

export const deleteTodoById = createAsyncThunk(
  "todo/deleteTodoById",
  async ({ todoId }) => {
    const response = await fetch(`${apiURL.todos}/${todoId}`);
    if (!response.ok) throw new Error("Error on DELETE the todo.");
    return { deletedTodoId: todoId };
  }
);
