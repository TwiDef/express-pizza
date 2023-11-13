import React from 'react';
import pizzaItem from './../../assets/img/pizza-item.png';
import './CartItem.scss';

const CartItem = (props) => {
    return (
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
    );
}

export default CartItem;