import TodoListItem from "components/TodoListItem";
import Loading from "components/Loading";
import { useFetchTodoThunk } from "hooks/useFetchTodos";
import usePatchTodoThunk from "hooks/usePatchTodo";
import useDeleteTodoThunk from "hooks/useDeleteTodo";

export default function TodoToRender() {
  const { todos, fetchLoading } = useFetchTodoThunk();
  const { patchTodo } = usePatchTodoThunk();
  const { deleteTodo } = useDeleteTodoThunk();

  const handleDelete = (todoId) => {
    // Fix an ability to delete task
    deleteTodo(todoId);
  };

  const toggleCheck = (todoId, isCheck) => {
    // Fix an ability to toggle task
    patchTodo({ todoId, isCheck });
  };

  return (
    <>
      {fetchLoading ? (
        <Loading />
      ) : todos.length !== 0 ? (
        <div className="flex flex-col justify-center">
          {/* Fix an ability to render todos */}
          {todos.map((todo, index) => (
            <TodoListItem
              key={todo.id}
              label={todo.label}
              checked={todo.checked}
              onCheck={() => toggleCheck(todo.id, !todo.checked)}
              onDelete={() => handleDelete(todo.id)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center p-[5px_0] text-sm text-[gray]">
          <p>Looks like you&apos;re absolutely free today!</p>
        </div>
      )}
    </>
  );
}
