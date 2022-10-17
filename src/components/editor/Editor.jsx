import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Editor.css";

import assemblerInterpreter from "../../asm/asm";

function Editor() {
  const dispatch = useDispatch();
  const code = useSelector((state) => state.code);

  const changeCode = (code) => {
    dispatch({ type: "changed", payload: code });
  };

  const runCode = (code) => {
    dispatch({ type: "running", payload: assemblerInterpreter(code) });
  };

  const [text, setText] = useState(code);

  return (
    <div className="editor">
      <div
        className="editor__placeholder"
        style={text ? { display: "none" } : { display: "block" }}
      >
        <p className="editor__placeholderText">
          Type your code here. Reed the{" "}
          <Link className="editor__placeholderLink" to="/Docs">
            Docs
          </Link>{" "}
          for syntax information, or see{" "}
          <Link className="editor__placeholderLink" to="/Examples">
            Examples
          </Link>{" "}
          for pre-built program examples
        </p>
      </div>
      <textarea
        spellCheck="false"
        name=""
        id=""
        cols="30"
        rows="10"
        className="editor__mainInput"
        value={text}
        onChange={(event) => {
          const newValue = event.target.value;
          setText(newValue);
          changeCode(newValue);
        }}
      ></textarea>
      <button onClick={() => runCode(code)} className="editor__run">
        run!
      </button>
    </div>
  );
}

export default Editor;
