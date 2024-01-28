import Input from "./Input";
export default function SearchBar({ onSearch }) {
  return (
    <div className=" text-white bg-black  bg-opacity-30 py-4">
      <h2 className=" text-center text-4xl ">
        Unleash Flavor Bliss <br /> Delivering smiles, one bite at a time!
      </h2>
      <Input onSearch={onSearch} />
    </div>
  );
}
