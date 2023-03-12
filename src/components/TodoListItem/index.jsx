export default function TodoListItem({ onCheck, checked, onDelete, label }) {
  return (
    <div className="flex items-center justify-between w-[400px] m-[0_auto_5px] cursor-pointer">
      <div
        tabIndex="0"
        role="checkbox"
        aria-checked
        className="rounded-[4px] hover:opacity-50 flex items-center flex-nowrap py-[5px] pr-[10px] pl-[5px]"
      >
        <input
          tabIndex="-1"
          className="mr-[5px]"
          type="checkbox"
          checked={checked}
          onChange={onCheck}
        />
        <span className={checked ? "line-through" : ""}>{label}</span>
      </div>
      <button
        type="button"
        className="hover:bg-[rgb(172,172,172)] border-none cursor-pointer w-[24px] h-[24px] shrink-0 bg-[rgb(200,200,200)]"
        onClick={onDelete}
      >
        x
      </button>
    </div>
  );
}
