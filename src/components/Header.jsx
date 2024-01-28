import logo from "../assets/CraveCart-logos.jpeg";
import Cart from "./Cart";
export default function Header() {
  return (
    <header className="flex justify-between py-8 px-6 h-20 bg-[#FFFFFF]  w-[100%] fixed top-[0]">
      <div className=" flex justify-start self-center">
        <img
          className=" w-16 h-16 mx-auto rounded-md "
          src={logo}
          alt="yummy food app logo"
        />
        <h1 className=" text-center text-3xl text-[#FC7753] mx-4 self-center">
          CraveCart
        </h1>
      </div>
      <div className="flex gap-4 self-center">
        <Cart />
        <button className=" text-2xl">Log In</button>
      </div>
    </header>
  );
}
