import React from 'react';
import cartIcon from './../../assets/img/cart.svg';
import pizzaItem from './../../assets/img/pizza-item.png';
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
            <div className="cart-item">
                <div className="cart-item__about">
                    <img src={pizzaItem} alt="pizzalogo" className="cart-item__img" />
                    <div className="cart-item__info">
                        <p className="cart-item__title">Сырный цыпленок</p>
                        <p className="cart-item__type">тонкое тесто, 26см</p>
                    </div>
                </div>
                <div className="cart-item__set">
                    <div className='cart-item__quantity'>
                        <button>-</button>
                        <span className='cart-item__quantity-num'>2</span>
                        <button>+</button>
                    </div>
                    <p className='cart-item__price'>770p</p>
                    <button className='cart-item__delete'>&times;</button>
                </div>
            </div>
        </div>
    );
}

export default Cart;