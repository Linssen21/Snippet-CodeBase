import { useEffect, useState } from "react";
import axios from "axios";
import handleAsync from "./handleAsync";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(null);
  const [pages, setTotalPages] = useState(null);

  useEffect(() => {
    async function loadData() {
      const [result, err] = await handleAsync(axios.get(url));
      if (err) {
        // oups! something went wrong
        setLoading(false);
        setError(err);
        return;
      }
      console.log(result.headers["x-wp-total"]);
      const posts = await result.data;
      setData(posts);
      setLoading(false);
    }

    loadData();
  }, [url]);
  return { data, loading, error };
}
