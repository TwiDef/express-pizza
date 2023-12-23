import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearItems } from '../../redux/slices/cartSlice';

import cartIcon from './../../assets/img/cart.svg';
import CartItem from '../cart-item/CartItem';
import './Cart.scss';

const Cart: React.FC = () => {
    const dispatch = useDispatch()
    const items = useSelector((state) => state.cart.items)
    const totalPrice = useSelector((state) => state.cart.totalPrice)
    const totalCount = items.reduce((sum: number, item: any) => sum + item.count, 0)

    const onClickClear = () => {
        if (window.confirm('Are you sure to remove all Pizzass from cart?')) {
            dispatch(clearItems())
        }
    }

    return (
        <div className='cart'>
            <div className="cart-header">
                <div className="cart-header__title">
                    <img src={cartIcon} alt="cart" />
                    <h5>Корзина</h5>
                </div>
                <button onClick={onClickClear} className='cart-header__remove'>Очистить корзину</button>
            </div>

            {items.map((item: any) => <li key={item.id}><CartItem {...item} /></li>)}

            <div className="cart-footer">
                <div className="cart-footer__total">
                    <p className="cart-footer__total-count">Всего пицц:
                        <span> {totalCount} шт</span>
                    </p>
                    <p className="cart-footer__total-price">Сумма заказа:
                        <span> {totalPrice}p</span>
                    </p>
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