import { useEffect, useState } from "react";
import axios from "axios";
import handleAsync from "./handleAsync";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function loadData() {
      const [result, error] = await handleAsync(axios.get(url));
      if (error) {
        // oups! something went wrong
        setLoading(false);
        return;
      }

      const posts = await result.data;
      setData(posts);
      setLoading(false);
    }

    loadData();
  }, [url]);
  return { data, loading };
}
