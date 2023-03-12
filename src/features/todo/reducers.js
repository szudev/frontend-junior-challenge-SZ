import {
  fetchTodos,
  toggleCheckTodoById,
  addNewTodo,
  deleteTodoById,
} from "./asyncThunks";
import {
  filterTodosToDeleteById,
  getTodoById,
  todoCheckedCounter,
} from "utils/arrayMethods";

export const todoFetchExtraReducer = (builder) => {
  builder
    .addCase(fetchTodos.pending, (state) => {
      state.fetchLoading = true;
      state.error = null;
    })
    .addCase(fetchTodos.fulfilled, (state, action) => {
      state.fetchLoading = false;
      const data = action.payload;
      const checkedCount = todoCheckedCounter(data);
      state.todos = data;
      state.checkedCounter = checkedCount;
    })
    .addCase(fetchTodos.rejected, (state, action) => {
      state.fetchLoading = false;
      state.error = action.error.message;
    });
};

export const todoToggleCheckedExtraReducer = (builder) => {
  builder
    .addCase(toggleCheckTodoById.pending, (state) => {
      state.patchLoading = true;
      state.error = null;
    })
    .addCase(toggleCheckTodoById.fulfilled, (state, action) => {
      state.patchLoading = false;
      const todos = state.todos;
      const todoId = action.payload.id;
      const todo = getTodoById(todos, todoId);
      if (todo) {
        todo.checked = !todo.checked;
        const checkedCount = todoCheckedCounter(state.todos);
        state.checkedCounter = checkedCount;
      }
    })
    .addCase(toggleCheckTodoById.rejected, (state, action) => {
      state.patchLoading = false;
      state.error = action.error.message;
    });
};

export const todoAddNewTodoExtraReducer = (builder) => {
  builder
    .addCase(addNewTodo.pending, (state) => {
      state.postLoading = true;
      state.error = null;
    })
    .addCase(addNewTodo.fulfilled, (state, action) => {
      state.postLoading = false;
      const newTodo = action.payload;
      state.todos.push(newTodo);
      const checkedCount = todoCheckedCounter(state.todos);
      state.checkedCounter = checkedCount;
    })
    .addCase(addNewTodo.rejected, (state, action) => {
      state.postLoading = false;
      state.error = action.error.message;
    });
};

export const todoDeleteTodoExtraReducer = (builder) => {
  builder
    .addCase(deleteTodoById.pending, (state) => {
      state.deleteLoading = true;
      state.error = null;
    })
    .addCase(deleteTodoById.fulfilled, (state, action) => {
      state.deleteLoading = false;
      const { deletedTodoId } = action.payload;
      const todos = state.todos;
      const newTodos = filterTodosToDeleteById(todos, deletedTodoId);
      state.todos = newTodos;
      const checkedCount = todoCheckedCounter(state.todos);
      state.checkedCounter = checkedCount;
    })
    .addCase(deleteTodoById.rejected, (state, action) => {
      state.deleteLoading = true;
      state.error = action.error.message;
    });
};
