import React from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/contact";
import AddContact from "./pages/addContact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Contact />} />
        <Route path="/add" element={<AddContact />} />
      </Routes>
    </div>
  );
}

export default App;
