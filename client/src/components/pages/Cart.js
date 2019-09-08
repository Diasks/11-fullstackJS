import React from 'react'
import CartItem from '../pages/CartItem';

const Cart = ({cart, isLoggedIn }) =>  {
    debugger;
    //passa igenom en remove from cart funktion

if (!isLoggedIn) return (<div><h1>Du måste logga in för att kunna se din kundvagn!</h1></div>)
else { 
    return (
        <div>
            {cart.map(item => (
                  <CartItem key={item.id} item={item} />
              ))}  
        </div>
    )
}}

export default Cart