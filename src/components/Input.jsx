import { useRef } from "react";

export default function Input({ onSearch }) {
  const inputRef = useRef();

  function handleChange() {
    onSearch(inputRef.current.value.trim());
  }

  function handleClick() {
    onSearch(inputRef.current.value.trim());
    inputRef.current.value = "";
  }
  return (
    <div className=" flex justify-center my-4 h-14">
      <input
        ref={inputRef}
        placeholder=" Search for food"
        className=" text-black px-4 w-[40%] rounded-s-xl outline-none"
        onChange={handleChange}
      />
      <button
        className=" bg-[#FC7753] rounded-e-xl px-3 text-xl hover:bg-[#f0613a]"
        onClick={handleClick}
      >
        Search Food
      </button>
    </div>
  );
}
