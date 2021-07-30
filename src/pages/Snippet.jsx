import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../utils/useFetch";
import Highlighter from "../utils/highLightCode";

const { REACT_APP_WORDPRESS_API } = process.env;

export default function Snippet() {
  const { id } = useParams();
  const { data, loading } = useFetch(
    `${REACT_APP_WORDPRESS_API}/snippets/${id}`
  );

  if (loading) {
    return <div> Loading...</div>;
  }

  console.log(data);
  const { title, cmb2 } = data;

  return (
    <React.Fragment>
      <div>Snippet Single Page {title.rendered}</div>
      <Highlighter code={"<div></div>"} />
    </React.Fragment>
  );
}
