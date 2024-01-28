import { createContext } from "react";

const CartContext = createContext({ items: [] });

const context = { items: [] };
export default function CartContextProvider({ children }) {
  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
}
