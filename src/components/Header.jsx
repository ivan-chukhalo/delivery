import React from 'react'
import {Link} from 'react-router-dom'
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import './Header.css'

export default function Header(){
    return (
        <header className='header'>
            <nav className='nav'>
                <Link to="/" className="nav__link">
                    <DeliveryDiningIcon className='test' sx={{fontSize: 48}}/>
                    Shop
                </Link>
                <Link to="/cart" className="nav__link">Cart</Link>
            </nav>
        </header>
    )
}
