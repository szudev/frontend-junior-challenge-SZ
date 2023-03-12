export const todoCheckedCounter = (todos) => {
  const count = todos.filter((todo) => todo.checked).length;
  return count;
};

export const getTodoNewId = (todos) => {
  if (todos.length === 0) return 0;
  const arrayOfId = todos.map((todo) => todo.id);
  const newId = Math.max(...arrayOfId);
  return newId + 1;
};

export const filterTodosToDeleteById = (todos, todoId) => {
  const filteredTodos = todos.filter((todo) => todo.id !== todoId);
  return filteredTodos;
};
