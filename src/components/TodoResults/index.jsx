import { useFetchTodoThunk } from "hooks/useFetchTodos";
import usePatchTodoThunk from "hooks/usePatchTodo";

export default function TodoResults() {
  // Fix an ability to calculate completed tasks
  const { checkedCounter, fetchLoading } = useFetchTodoThunk();
  const { patchLoading } = usePatchTodoThunk();
  return (
    <div className="font-medium text-lg text-center block p-[5px_0] mb-[10px]">
      <div className="flex gap-2 justify-center items-center">
        <p>DONE:</p>
        <p>
          {fetchLoading || patchLoading ? "Calculating..." : checkedCounter}
        </p>
      </div>
    </div>
  );
}
