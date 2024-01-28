import Tile from "./Tile";
import useFetch from "../hooks/useFetch";

export default function Content({ queryFn }) {
  const { isFetching, data: allFoods, error } = useFetch(queryFn, []);
  if (isFetching) {
    return <p className=" text-white text-center text-2xl">Fetching food..</p>;
  }
  return (
    <div className=" flex flex-wrap w-[100%]">
      {error && (
        <p className=" text-white text-center text-2xl">Error..{error}</p>
      )}
      {allFoods &&
        allFoods.length > 0 &&
        allFoods.map((food) => (
          <Tile
            key={food.id}
            imgSrc={food.image}
            name={food.name}
            price={food.price}
          />
        ))}
      {allFoods && allFoods.length === 0 && (
        <p className=" text-white text-center text-4xl">
          {" "}
          No food item found..Search different food item.{" "}
        </p>
      )}
    </div>
  );
}
