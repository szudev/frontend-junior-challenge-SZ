import usePostTodoThunk from "hooks/usePostTodo";
import { useState } from "react";
import AddButton from "components/Buttons/AddButton";
import ProcessingButton from "components/Buttons/ProcessingButton";

export default function TodoForm() {
  const { postLoading, postNewTodo } = usePostTodoThunk();
  const [label, setLabel] = useState("");

  const handleInputOnChange = (e) => {
    const { value } = e.target;
    setLabel(value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    postNewTodo(label);
    setLabel("");
  };

  return (
    <form
      onSubmit={handleOnSubmit}
      className="flex justify-center items-center gap-2 w-[400px] m-[0_auto_5px]"
    >
      <input
        type="text"
        name="todoLabel"
        value={label}
        placeholder="Enter new to do"
        className="flex-1 rounded-md border border-gray-400 p-2 focus:outline-black"
        onChange={handleInputOnChange}
      />
      {postLoading ? (
        <ProcessingButton />
      ) : (
        <AddButton disabled={label ? false : true} />
      )}
    </form>
  );
}
