import React, { useState } from "react";
import { nanoid } from "nanoid";
import ShopBtn from "./ShopBtn.jsx";
import "./Shop.css";

export default function Shop({ data }) {
  function getShops() {
    const shopNames = [];
    data.forEach((meal) => {
      if (!shopNames.includes(meal.shop)) {
        shopNames.push(meal.shop);
      }
    });
    return shopNames;
  }
  const [shops, setShops] = useState(getShops());

  const buttons = shops.map((shopName) => (
    <ShopBtn shopName={shopName} key={nanoid()} />
  ));

  const mealCards = data.map(meal => {
    return (
        <MealCard 
            name={meal.name}
            shop={meal.shop}
            price={meal.price}
            description={meal.description}
            key={nanoid()}
        />
    )
  } )

  return (
    <main className="shopping">
      <nav className="shops">{buttons}</nav>
      <div className="meal">{mealCards}</div>
    </main>
  );
}
