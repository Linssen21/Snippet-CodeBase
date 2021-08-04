import SyntaxHighlighter from "react-syntax-highlighter";
import { monokaiSublime } from "react-syntax-highlighter/dist/esm/styles/hljs";
import _ from "lodash";
export default function Highlighter({ code, language }) {
  return (
    <SyntaxHighlighter
      language={!_.isEmpty(language) ? language[0].name : "plaintext"}
      style={monokaiSublime}
      showLineNumbers="true"
      wrapLongLines="true"
    >
      {code}
    </SyntaxHighlighter>
  );
}
