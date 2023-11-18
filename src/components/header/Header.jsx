import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import pizzaLogo from '../../assets/img/pizza.png';
import cartLogo from '../../assets/img/cartlogo.svg';

const Header = (props) => {
    return (
        <div className='header'>
            <Link to="/" className="header-logo">
                <img src={pizzaLogo} alt="logo" className="header-logo__img" />
                <div className="header-logo__text">
                    <h1 className='header-logo__bold'>express pizza</h1>
                    <span className='header-logo__thin'>самая быстая доставка</span>
                </div>
            </Link>
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