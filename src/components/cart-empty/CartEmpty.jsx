import React from 'react';
import { Link } from 'react-router-dom';
import shoppingBasket from '../../assets/img/shopping-basket.png';
import './CartEmpty.scss';

const CartEmpty = (props) => {
    return (
        <div className="cart-empty__wrapper">
            <div className='cart-empty'>
                <h2 className='cart-empty__header'>Корзина пуста &#128722;</h2>
                <p className='cart-empty__text'>Для заказа пиццы, перейдите на главную страницу</p>
                <img className='cart-empty__img' src={shoppingBasket} alt="" />
                <Link className='cart-empty__link' to="/">на главную</Link>
            </div>
        </div>

    );
}

export default CartEmpty;