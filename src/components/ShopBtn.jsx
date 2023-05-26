import React from 'react'
import './ShopBtn.css'

export default function ShopBtn({shopName}){
    return (
        <button className='shop-btn'>
            {shopName}
        </button>
    )
}