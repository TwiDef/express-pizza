import React from 'react';
import cartIcon from './../../assets/img/cart.svg';

import './Cart.scss';
import CartItem from '../cart-item/CartItem';

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
                    <button className="cart-footer__backward-btn">&#x3c; Вернутся назад</button>
                    <button className="cart-footer__paid-btn">Оплатить сейчас</button>
                </div>
            </div>
        </div>
    );
}

export default Cart;