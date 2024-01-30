import { useRef, useContext } from "react";
import { createPortal } from "react-dom";
import { CartContext } from "./CartContext";

export default function CartModal({ isOpen, setState }) {
  const dialogRef = useRef();
  const { items, updateQuantity, totalPrice } = useContext(CartContext);
  if (isOpen) {
    dialogRef.current.showModal();
  }
  const cssClass =
    " bg-red-800 hover:bg-red-900 rounded-md px-2 text-white mx-2";

  return createPortal(
    <dialog
      ref={dialogRef}
      onClose={setState}
      className=" w-[40%]  min-h-fit rounded-md"
    >
      <div className=" flex justify-between px-5">
        <p></p>
        <p className=" text-center text-2xl capitalize text-[#FC7753] py-3">
          cart items
        </p>

        <button
          className=" my-auto text-sm"
          onClick={() => dialogRef.current.close()}
        >
          Close
        </button>
      </div>

      <hr />

      <ul className=" py-3">
        {items.length === 0 ? (
          <p className=" text-xl text-center">No Food Item in Cart</p>
        ) : (
          <li className="flex justify-between px-4 py-2 text-[#FC7753] text-xl">
            <p>Name</p>
            <p>Price</p>
            <p>Quantity</p>
          </li>
        )}
        {items.map((item) => (
          <li key={item.id} className="flex justify-between px-4 py-2">
            <p>{item.name}</p>
            <p>${item.price * item.quantity}</p>
            <div>
              <button
                className={cssClass}
                onClick={() => updateQuantity(item.id, 1)}
              >
                +
              </button>
              {item.quantity}
              <button
                className={cssClass}
                onClick={() => item.quantity > 0 && updateQuantity(item.id, -1)}
              >
                -
              </button>
            </div>
          </li>
        ))}
      </ul>
      {items.length > 0 && (
        <p className=" text-lg text-right px-6">Totol price : ${totalPrice}</p>
      )}
      <button
        onClick={() => items.length === 0 && dialogRef.current.close()}
        className=" bg-red-700 hover:bg-red-900 px-3 text-white text-xl rounded-lg my-4 ms-[40%]"
      >
        {items.length === 0 ? "Return" : "Checkout"}
      </button>
    </dialog>,
    document.getElementById("modal")
  );
}
