import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import CartModal from "./CartModal";
export default function Cart() {
  const { items } = useContext(CartContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function changeState() {
    setModalIsOpen(false);
  }

  return (
    <button className=" relative " onClick={() => setModalIsOpen(true)}>
      <CartModal isOpen={modalIsOpen} setState={changeState} />
      <ShoppingCartCheckoutIcon fontSize="large" />
      <p className=" absolute z-10 left-6 top-[-30%] bg-[#FC7753] rounded-full text-white h-6 min-h-fit aspect-square">
        {items.length}
      </p>
    </button>
  );
}
