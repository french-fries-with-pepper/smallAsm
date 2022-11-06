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
  const exitCode = store.result.exitCode;
  return (
    <div className="output">
      <div className="output__window">
        <p className="output__text">{outputText}</p>
        {exitCode !== 0 && (
          <p className="output__exitCode">terminated, exit code {exitCode}</p>
        )}
        {isDebug && <div className="output__debug">{debugLog}</div>}
        <form className="output__form">
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
