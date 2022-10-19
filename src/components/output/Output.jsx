import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./Output.css";

function Output() {
  const store = useSelector((state) => state);
  const outputText = store.result.output;
  const isDebug = store.isDebugEnabled;

  const dispatch = useDispatch();
  const toggleDebug = (debugState) => {
    dispatch({ type: "toggleDebug", payload: debugState });
  };

  const debugLog = store.result.debug
    .split("\n")
    .map((line, i) => <p key={i}>{line}</p>);
  return (
    <div className="output">
      <div className="output__window">
        <p className="output__text">{outputText}</p>
        <div className="output__debug">{isDebug && debugLog}</div>
        <form>
          <input
            type="checkbox"
            name="debug"
            id="debug"
            checked={isDebug}
            onChange={(e) => toggleDebug(e.target.checked)}
          />{" "}
          <label htmlFor="debug">enable debug log</label>
        </form>
      </div>
    </div>
  );
}

export default Output;
