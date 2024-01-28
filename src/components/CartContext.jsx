import { createContext, useState } from "react";

export const CartContext = createContext({ items: [], addFood: () => {} });

export default function CartContextProvider({ children }) {
  const [cartItem, setCartItem] = useState([]);

  function addFoodItem(name, price, id) {
    setCartItem((prevItem) => [...prevItem, { id, name, price }]);
  }
  const context = { items: cartItem, addFood: addFoodItem };
  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
}
