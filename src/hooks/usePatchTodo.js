import { toggleCheckTodoById } from "features/todo/asyncThunks";
import { selectPatchLoading } from "features/todo/todoSlice";
import { useSelector, useDispatch } from "react-redux";

export default function usePatchTodoThunk() {
  const patchLoading = useSelector(selectPatchLoading);
  const dispatch = useDispatch();

  const patchTodo = ({ todoId, isCheck }) => {
    dispatch(toggleCheckTodoById({ todoId, isCheck }));
  };

  return { patchTodo, patchLoading };
}
