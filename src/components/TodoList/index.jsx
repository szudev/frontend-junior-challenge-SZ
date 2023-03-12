import TodoToRender from "components/TodoToRender";

export default function TodoList() {
  return (
    <div className="p-[10px_0] border-b-[rgba(1,1,1,0.1)] border-b-[1px]">
      <span className="font-medium text-lg uppercase text-center block border-b-[1px] border-b-[rgba(1,1,1,0.1)] p-[5px_0] mb-[10px]">
        Things to do:
      </span>
      <TodoToRender />
    </div>
  );
}
