import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import pizzaLogo from '../../assets/img/pizza.png';
import cartLogo from '../../assets/img/cartlogo.svg';
import Search from '../search/Search';
import './Header.scss';

const Header = () => {
    const totalPrice = useSelector(state => state.cart.totalPrice)
    const items = useSelector(state => state.cart.items)

    const totalCount = items.reduce((sum, item) => sum + item.count, 0)

    return (
        <div className='header'>
            <div className="header-logo">
                <Link to="/"><img src={pizzaLogo} alt="logo" className="header-logo__img" /></Link>
                <div className="header-logo__text">
                    <h1 className='header-logo__bold'>express pizza</h1>
                    <span className='header-logo__thin'>самая быстая доставка</span>
                </div>
            </div>
            <Link to="/cart" className="header-cart">
                <div className="header-cart__wrapper">
                    <span className='header-cart__price'>{totalPrice} ₽</span>
                    <span className='header-cart__items'>
                        <img src={cartLogo} alt="cartLogo" className='header-cart__items-cartlogo' />
                        {totalCount}
                    </span>
                </div>
            </Link>
        </div >
    );
}

export default Header;