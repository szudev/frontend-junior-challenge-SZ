import { useSelector } from "react-redux";
import { selectError } from "features/todo/todoSlice";
import { toast } from "react-toastify";

export default function useFetchError() {
  const errorOnFetch = useSelector(selectError);

  const displayToastError = (errorOnFetch) => {
    toast.error(errorOnFetch, {
      theme: "dark",
      draggable: false,
    });
  };

  return { errorOnFetch, displayToastError };
}
