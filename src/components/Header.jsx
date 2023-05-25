import React from 'react'
import {Link} from 'react-router-dom'
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';

export default function Header(){
    return (
        <header>
            <nav>
                <Link to="/"><DeliveryDiningIcon /> Shop</Link>
                <Link to="/cart">Cart</Link>
            </nav>
        </header>
    )
}
