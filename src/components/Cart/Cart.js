import React, { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import cartImage from '../../images/carts.png'
import './Cart.css';

const Cart = (props) => {
    const value = useContext(CartContext);
    return (
        <div className='cart-wrapper'>
            <img src={cartImage} alt ="cart_Image"/>
            <span>{value.cartValue.length}</span>
        </div>
    );
}

export default Cart;
