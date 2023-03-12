import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "features/todo/todoSlice";

export const todoStore = configureStore({
  reducer: { todo: todoReducer },
});
