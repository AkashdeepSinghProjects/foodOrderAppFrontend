import logo from "../assets/CraveCart-logos.jpeg";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
export default function Header() {
  return (
    <header className="flex justify-between py-8 px-6 h-20 bg-[#FFFFFF]">
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
        <button className=" relative ">
          <ShoppingCartCheckoutIcon fontSize="large" />
          <p className=" absolute z-10 left-6 top-[-30%] bg-[#FC7753] rounded-full text-white h-6 min-h-fit aspect-square">
            0
          </p>
        </button>

        <button className=" text-2xl">Log In</button>
      </div>
    </header>
  );
}
