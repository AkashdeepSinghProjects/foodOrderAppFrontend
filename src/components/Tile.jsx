import { useContext } from "react";
import { CartContext } from "./CartContext";

export default function Tile({ imgSrc, name, price, id }) {
  const { addFood } = useContext(CartContext);
  return (
    <div className=" border-8 mx-4 rounded-lg text-white mb-5">
      <img
        src={"http://localhost:3000/" + imgSrc}
        className="h-52 w-80 object-cover "
      />
      <div className=" flex flex-col  items-center bg-black bg-opacity-60 text-xl ">
        <p>{name}</p>
        <p>{price}</p>
        <button
          onClick={() => {
            addFood(name, price, id);
          }}
          className=" bg-red-700 hover:bg-red-900 w-[100%] "
        >
          Add
        </button>
      </div>
    </div>
  );
}
