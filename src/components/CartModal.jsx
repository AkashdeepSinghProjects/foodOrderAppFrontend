import { useRef, useContext } from "react";
import { createPortal } from "react-dom";
import { CartContext } from "./CartContext";

export default function CartModal({ isOpen, setState }) {
  const dialogRef = useRef();
  const { items } = useContext(CartContext);
  if (isOpen) {
    dialogRef.current.showModal();
  }

  return createPortal(
    <dialog
      ref={dialogRef}
      onClose={setState}
      className=" w-[40%]  min-h-fit rounded-md"
    >
      <p className=" text-center text-2xl capitalize text-[#FC7753]">
        cart items
      </p>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} + {item.price} -
          </li>
        ))}
      </ul>
      <button
        onClick={() => dialogRef.current.close()}
        className=" bg-red-700 hover:bg-red-900 px-3 text-white text-xl rounded-lg my-4 ms-[40%]"
      >
        Checkout
      </button>
    </dialog>,
    document.getElementById("modal")
  );
}
