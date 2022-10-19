import { useDispatch, useSelector } from "react-redux";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./Editor.css";

import assemblerInterpreter from "../../asm/asm";

function Editor() {
  const dispatch = useDispatch();
  const code = useSelector((state) => state.code);
  const isDebug = useSelector((state) => state.isDebugEnabled);

  const changeCode = (code) => {
    dispatch({ type: "changed", payload: code });
  };

  const runCode = (code) => {
    dispatch({
      type: "running",
      payload: assemblerInterpreter(code, {}, isDebug),
    });
  };

  const showPlaceholder = (e) => {
    if (placeholder) {
      if (e.target.value) setPlaceholder(false);
    }
    if (e.target.value == "") {
      setPlaceholder(true);
    }
  };

  const [placeholder, setPlaceholder] = useState(code === "");
  const refCode = useRef(code);
  return (
    <div className="editor">
      <div
        className="editor__placeholder"
        style={placeholder ? { display: "block" } : { display: "none" }}
      >
        <p className="editor__placeholderText">
          Type your code here. Read the{" "}
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
        ref={refCode}
        defaultValue={code}
        onChange={showPlaceholder}
      ></textarea>
      <button
        onClick={() => {
          changeCode(refCode.current.value);
          runCode(refCode.current.value);
        }}
        className="editor__run"
      >
        run!
      </button>
    </div>
  );
}

export default Editor;
