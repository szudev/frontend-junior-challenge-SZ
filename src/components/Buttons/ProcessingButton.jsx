export default function ProcessingButton() {
  return (
    <button
      type="button"
      className="flex justify-center items-center shadow transition ease-in-out duration-150 cursor-not-allowed rounded-md bg-[#458EF7] text-white hover:brightness-90 p-[10px] w-[110px] h-[42px]"
      disabled
    >
      <svg
        className="animate-spin w-5 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </button>
  );
}
