import { createContext, useState } from "react";

export const CartContext = createContext({
  items: [],
  addFood: () => {},
  updateQuantity: () => {},
  totalPrice: 0,
});

export default function CartContextProvider({ children }) {
  const [cartItem, setCartItem] = useState([]);

  function addFoodItem(name, price, id) {
    setCartItem((prevCartArray) =>
      prevCartArray.find((foodItem) => foodItem.id === id)
        ? prevCartArray
        : [...prevCartArray, { id, name, price, quantity: 1 }]
    );
  }
  function updateQuantity(id, addQuantity) {
    setCartItem((prevItem) =>
      prevItem.map((foodItem) =>
        foodItem.id === id
          ? { ...foodItem, quantity: foodItem.quantity + addQuantity }
          : { ...foodItem }
      )
    );

    setCartItem((prevCartArray) =>
      prevCartArray.filter((foodItem) => foodItem.quantity > 0)
    );
  }

  function totalPrice() {
    let total = 0;
    cartItem.map((item) => (total += item.price * item.quantity));

    return total.toFixed(2);
  }
  const context = {
    items: cartItem,
    addFood: addFoodItem,
    updateQuantity: updateQuantity,
    totalPrice: totalPrice(),
  };
  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
}
