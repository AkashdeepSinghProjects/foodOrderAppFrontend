import Header from "./components/Header";
import Main from "./components/Main";
import CartContextProvider from "./components/CartContext";

export default function App() {
  return (
    <CartContextProvider>
      <Header />
      <Main />
    </CartContextProvider>
  );
}
