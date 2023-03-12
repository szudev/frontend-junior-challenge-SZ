import { selectDeleteLoading } from "features/todo/todoSlice";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodoById } from "features/todo/asyncThunks";

export default function useDeleteTodoThunk() {
  const deleteLoading = useSelector(selectDeleteLoading);
  const dispatch = useDispatch();

  const deleteTodo = (todoId) => {
    dispatch(deleteTodoById({ todoId }));
  };

  return { deleteLoading, deleteTodo };
}
