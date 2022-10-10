import { useState } from "react";
import { useSelector } from "react-redux";

import "./Output.css";

function Output() {
  const outputText = useSelector((state) => state.output);
  return (
    <div className="output">
      <div className="output__window">
        <p className="output__text">{outputText}</p>
      </div>
    </div>
  );
}

export default Output;
