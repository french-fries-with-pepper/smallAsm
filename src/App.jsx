import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/home";
import Docs from "./components/docs/docs";
import Examples from "./components/examples/examples";
import Contacts from "./components/contacts/contacts";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/Docs" element={<Docs />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/Examples" element={<Examples />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
