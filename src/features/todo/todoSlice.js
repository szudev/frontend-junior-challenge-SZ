import { createSlice } from "@reduxjs/toolkit";
import {
  todoFetchExtraReducer,
  todoToggleCheckedExtraReducer,
  todoAddNewTodoExtraReducer,
  todoDeleteTodoExtraReducer,
} from "./reducers";

const initialState = {
  todos: [],
  checkedCounter: 0,
  fetchLoading: false,
  patchLoading: false,
  postLoading: false,
  deleteLoading: false,
  error: null,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    todoFetchExtraReducer(builder);
    todoToggleCheckedExtraReducer(builder);
    todoAddNewTodoExtraReducer(builder);
    todoDeleteTodoExtraReducer(builder);
  },
});

export const selectTodos = (state) => state.todo.todos;
export const selectFetchLoading = (state) => state.todo.fetchLoading;
export const selectCheckedCounter = (state) => state.todo.checkedCounter;
export const selectError = (state) => state.todo.error;
export const selectPatchLoading = (state) => state.todo.patchLoading;
export const selectPostLoading = (state) => state.todo.postLoading;
export const selectDeleteLoading = (state) => state.todo.deleteLoading;
//export const { toggleChecked } = todoSlice.actions;
export default todoSlice.reducer;
