export default function AddButton({ disabled }) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className="rounded-md bg-[#458EF7] text-white hover:brightness-90 p-[10px] w-[110px] h-[42px] disabled:cursor-not-allowed"
    >
      ADD TO DO
    </button>
  );
}
