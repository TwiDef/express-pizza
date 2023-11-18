import React from 'react';
import { Link } from 'react-router-dom';

import pizzaLogo from '../../assets/img/pizza.png';
import cartLogo from '../../assets/img/cartlogo.svg';
import './Header.scss';

const Header = (props) => {
    return (
        <div className='header'>
            <div className="header-logo">
                <Link to="/"><img src={pizzaLogo} alt="logo" className="header-logo__img" /></Link>
                <div className="header-logo__text">
                    <span className='header-logo__bold'>express pizza</span>
                    <span className='header-logo__thin'>самая быстая доставка</span>
                </div>
            </div>
            <Link to="/cart" className="header-cart">
                <span className='header-cart__price'>100p</span>
                <span className='header-cart__divided'></span>
                <span className='header-cart__items'>
                    <img src={cartLogo} alt="cartLogo" className='header-cart__items-cartlogo' />
                    23
                </span>
            </Link>
        </div >
    );
}

export default Header;