import React from 'react'
import "./MealCard.css"

export default function MealCard({name, shop, price, description}){
    return(
        <div className='mealCard'>
            <h3 className="mealCard__header">{name}</h3>
            <p className='mealCard__info'>{price}</p>
            <p className='mealCard__'>{shop}</p>
            <p className='mealCard__description'>{description}</p>
        </div>
    )
}