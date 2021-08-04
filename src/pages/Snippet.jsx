import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../utils/useFetch";
import Highlighter from "../components/HighLightCode";
import _ from "lodash";

const { REACT_APP_WORDPRESS_API } = process.env;

export default function Snippet() {
  /**
   * Gets the ID
   */
  const { id } = useParams();
  /**
   *
   */
  const { data, loading } = useFetch(
    `${REACT_APP_WORDPRESS_API}/snippets/${id}`
  );
  const {
    data: language,
    lodaing: languageLoading,
  } = useFetch(`${REACT_APP_WORDPRESS_API}/snippet_language?post=${id}`);

  if (loading || languageLoading) {
    return <div> Loading...</div>;
  }

  const { title, cmb2 } = data;
  console.log(language);
  return (
    <React.Fragment>
      <div>Snippet Single Page {title.rendered}</div>

      {!_.isEmpty(data) && (
        <Highlighter
          code={cmb2.snippet_fields_metabox.snippet_fields_code}
          language={language}
        />
      )}
    </React.Fragment>
  );
}
