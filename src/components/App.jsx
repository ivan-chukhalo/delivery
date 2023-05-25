import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header.jsx";
import Shop from "./Shop.jsx"
import Cart from "./Cart.jsx"
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
