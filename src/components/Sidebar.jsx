import useFetch from "../hooks/useFetch";
import { getAllTypes } from "../http";
export default function Sidebar({ handleClick }) {
  const { isFetching, data: allTypesOfFood, error } = useFetch(getAllTypes, []);

  if (isFetching) {
    return <p className=" text-white text-center text-2xl">Fetching food..</p>;
  }
  return (
    <aside className="flex flex-col w-[30%] text-2xl text-white bg-[#FC7753] gap-3 py-4  me-4">
      {error && (
        <p className=" text-white text-center text-2xl">Error..{error}</p>
      )}
      {allTypesOfFood &&
        allTypesOfFood.map((type, index) => (
          <button
            onClick={() => handleClick(type.type)}
            key={index}
            className=" capitalize hover:text-black"
          >
            {type.type}
          </button>
        ))}
    </aside>
  );
}
