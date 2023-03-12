import { useSelector } from "react-redux";
import { selectError } from "features/todo/todoSlice";
import { toast } from "react-toastify";
import { toastOptions } from "utils/toastOptions";

export default function useFetchError() {
  const errorOnFetch = useSelector(selectError);

  const displayToastError = (errorOnFetch) => {
    toast.error(errorOnFetch, toastOptions);
  };

  return { errorOnFetch, displayToastError };
}
