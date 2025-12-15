import React from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/contact";
import AddContact from "./pages/addContact";
import EditContact from "./pages/editContact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Contact />} />
        <Route path="/add" element={<AddContact />} />
        <Route path="/edit/:id" element={<EditContact />} />
      </Routes>
    </div>
  );
}

export default App;
