import React from 'react';
import { Link } from 'react-router-dom';

import cartIcon from './../../assets/img/cart.svg';
import CartItem from '../cart-item/CartItem';
import './Cart.scss';

const Cart = (props) => {
    return (
        <div className='cart'>
            <div className="cart-header">
                <div className="cart-header__title">
                    <img src={cartIcon} alt="cart" />
                    <h5>Корзина</h5>
                </div>
                <button className='cart-header__remove'>Очистить корзину</button>
            </div>
            <CartItem />
            <CartItem />
            <CartItem />
            <div className="cart-footer">
                <div className="cart-footer__total">
                    <p className="cart-footer__total-count">Всего пицц: <span>3is</span></p>
                    <p className="cart-footer__total-price">Сумма заказа: <span>900p</span></p>
                </div>
                <div className="cart-footer__btns">
                    <Link to="/">
                        <button className="cart-footer__backward-btn">&#x3c; Вернутся назад</button>
                    </Link>
                    <Link to="/payment">
                        <button className="cart-footer__paid-btn">Оплатить сейчас</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Cart;