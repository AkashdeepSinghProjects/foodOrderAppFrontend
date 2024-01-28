import Tile from "./Tile";
import { getAllItems } from "../http";
import useFetch from "../hooks/useFetch";

export default function Content() {
  const { isFetching, data: allFoods, error } = useFetch(getAllItems, []);
  if (isFetching) {
    return <p className=" text-white text-center text-2xl">Fetching food..</p>;
  }
  return (
    <div className=" flex flex-wrap w-[100%]">
      {error && <p>Error..{error}</p>}
      {allFoods &&
        allFoods.map((food) => (
          <Tile
            key={food.id}
            imgSrc={food.image}
            name={food.name}
            price={food.price}
          />
        ))}
    </div>
  );
}
