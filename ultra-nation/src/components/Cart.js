import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let totalPopulation = 0;
        for (let i = 0; i < cart.length; i++) {
            const country = cart[i];
            totalPopulation += country.population; 
        }
    return (
        <div>
            <h3>This is {cart.length}</h3>
            <h1>Population : {totalPopulation}</h1>
        </div>
    );
};

export default Cart;