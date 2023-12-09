import React from 'react';
import { useSelector } from 'react-redux';

import './CartPage.scss';
import Cart from '../../cart/Cart';
import CartEmpty from '../../cart-empty/CartEmpty';

const CartPage = (props) => {
    const totalPrice = useSelector((state) => state.cart.totalPrice)

    if (totalPrice) {
        return (
            <div className='cartPage'>
                <Cart />
            </div>
        )
    }
    return (
        <div className='cartPage'>
            <CartEmpty />
        </div>
    );
}

export default CartPage;