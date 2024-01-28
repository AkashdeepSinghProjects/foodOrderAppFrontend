import { useEffect, useState } from "react";

export default function useFetch(fetchFn, initialData) {
  const [isFetching, setFetching] = useState();
  const [data, setData] = useState(initialData);
  const [error, setError] = useState();

  useEffect(() => {
    setFetching(true);
    async function dataFetch() {
      try {
        const data = await fetchFn();
        setData(data);
      } catch (error) {
        console.log("error in useFetch", error.message);
        setError(error.message);
      }
    }

    dataFetch();
    setFetching(false);
  }, [fetchFn]);

  return { isFetching, data, error };
}
