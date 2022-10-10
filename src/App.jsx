import { useState } from "react";
import Header from "./components/header/Header";
import Editor from "./components/editor/Editor";
import Output from "./components/output/Output";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <main className="App__main">
        <Editor />
        <Output />
      </main>
    </div>
  );
}

export default App;
