import React from 'react';

import './CartPage.scss';
import Cart from '../../cart/Cart';

const CartPage = (props) => {
    return (
        <div className='cartPage'>
            <Cart />
        </div>
    );
}

export default CartPage;