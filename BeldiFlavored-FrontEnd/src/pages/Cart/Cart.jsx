import React, { useState } from 'react';
import './Cart.css';
import CartItem from '../../components/CartContent/CartContent';

function Cart({ cart, setCart, handleChange }) {
    return (
        <>
            <CartItem cart={cart} setCart={setCart} handleChange={handleChange} />
        </>
    );
}

export default Cart;
