import React, {useState} from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header.jsx";
import Shop from "./Shop.jsx"
import Cart from "./Cart.jsx"
import db from "../db.js"
import "./App.css";

function App() {
const [data, setData] = useState(db)

  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Shop data={data}/>} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
