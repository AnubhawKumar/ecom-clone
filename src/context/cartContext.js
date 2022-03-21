import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = (props) => {

    const[cartValue,setCartValue] = useState([]);

    const addItemToCart = (item) => {
        setCartValue([...cartValue,item]);
        console.log(cartValue.length)
    }
    return(
        <CartContext.Provider value={{cartValue,addItemToCart}}>
            {props.children}
        </CartContext.Provider>
    )
}
