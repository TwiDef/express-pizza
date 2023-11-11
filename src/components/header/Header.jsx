import React from 'react';
import './Header.scss';
import pizzaLogo from '../../assets/img/pizza.png';
import cartLogo from '../../assets/img/cartlogo.svg';

const Header = (props) => {
    return (
        <div className='header'>
            <div className="header-logo">
                <img src={pizzaLogo} alt="logo" className="header-logo__img" />
                <div className="header-logo__text">
                    <span className='header-logo__bold'>express pizza</span>
                    <span className='header-logo__thin'>самая быстая доставка</span>
                </div>
            </div>
            <div className="header-cart">
                <span className='header-cart__price'>100p</span>
                <span className='header-cart__divided'></span>
                <a href='#' className='header-cart__items'>
                    <img src={cartLogo} alt="cartLogo" className='header-cart__items-cartlogo' />
                    23
                </a>
            </div>
        </div>
    );
}

export default Header;