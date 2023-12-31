import React from 'react';
import { useDispatch } from 'react-redux';
import { plusItem, minusItem, removeItem } from '../../redux/slices/cartSlice';
import './CartItem.scss';

type CartItemProps = {
    count: number,
    id: string,
    imageUrl: string,
    price: number,
    size: number,
    title: string,
    type: string 
}

const CartItem: React.FC<CartItemProps> = ({ count, id, imageUrl, price, size, title, type }) => {
    const dispatch = useDispatch()

    const onClickPlus = () => {
        dispatch(plusItem(id))
    }
    const onClickMinus = () => {
        dispatch(minusItem(id))
    }
    const onClickRemove = () => {
        dispatch(removeItem(id))
    }

    return (
        <div className="cart-item">
            <div className="cart-item__about">
                <img src={imageUrl} alt="pizzalogo" className="cart-item__img" />
                <div className="cart-item__info">
                    <p className="cart-item__title">{title}</p>
                    <p className="cart-item__type">{type} тесто, {size}см</p>
                </div>
            </div>
            <div className="cart-item__set">
                <div className='cart-item__quantity'>
                    <button onClick={onClickMinus}>-</button>
                    <span className='cart-item__quantity-num'>{count}</span>
                    <button onClick={onClickPlus}>+</button>
                </div>
                <p className='cart-item__price'>{price * count}p</p>
                <button onClick={onClickRemove} className='cart-item__delete'>&times;</button>
            </div>
        </div>
    );
}

export default CartItem;