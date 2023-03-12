import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos } from "features/todo/asyncThunks";
import {
  selectTodos,
  selectFetchLoading,
  selectCheckedCounter,
} from "features/todo/todoSlice";

export const useFetchTodoThunk = () => {
  const todos = useSelector(selectTodos);
  const checkedCounter = useSelector(selectCheckedCounter);
  const fetchLoading = useSelector(selectFetchLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return { todos, checkedCounter, fetchLoading };
};
