import { useEffect, useState } from "react";
import axios from "axios";
import handleAsync from "./handleAsync";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function loadData() {
      const [result, error] = await handleAsync(axios.get(url));
      if (error) {
        // oups! something went wrong
        return;
      }

      const posts = await result.json();
      setData(posts);
    }

    loadData();
  }, [url]);
  return data;
}
