import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import "./Editor.css";

import assemblerInterpreter from "../../asm/asm";

function Editor() {
  const dispatch = useDispatch();
  const code = useSelector((state) => state.code);
  console.log(code);

  const changeCode = (code) => {
    dispatch({ type: "changed", payload: code });
  };

  const runCode = (code) => {
    dispatch({ type: "running", payload: assemblerInterpreter(code) });
  };

  const [state, setState] = useState(code);

  return (
    <div className="editor">
      <textarea
        spellcheck="false"
        name=""
        id=""
        cols="30"
        rows="10"
        className="editor__mainInput"
        value={state}
        onChange={(event) => {
          const newValue = event.target.value;
          setState(newValue);
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
