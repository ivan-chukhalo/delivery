import React from 'react'
import './MealCard.css'

export default function MealCard({name, shop, price, description}){
    return(
        <div className='mealCard'>
            <h3 className="mealCard__header">{name}</h3>
            <p className='mealCard__price mealCard__info'>{price} UAH</p>
            <p className='mealCard__shop mealCard__info'>{shop}</p>
            <p className='mealCard__description'>{description}</p>
        </div>
    )
}