export default function Input() {
  return (
    <div className=" flex justify-center my-4 h-14">
      <input
        placeholder=" Search for food"
        className=" text-black px-4 w-[40%] rounded-s-xl outline-none"
      />
      <button className=" bg-[#FC7753] rounded-e-xl px-3 text-xl hover:bg-[#f0613a]">
        Search Food
      </button>
    </div>
  );
}
