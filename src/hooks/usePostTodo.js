import { selectPostLoading, selectTodos } from "features/todo/todoSlice";
import { useSelector, useDispatch } from "react-redux";
import { addNewTodo } from "features/todo/asyncThunks";
import { getTodoNewId } from "utils/arrayMethods";

export default function usePostTodoThunk() {
  const postLoading = useSelector(selectPostLoading);
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  const postNewTodo = (label) => {
    const newId = getTodoNewId(todos);
    dispatch(addNewTodo({ todoId: newId, label }));
  };

  return { postLoading, postNewTodo };
}
