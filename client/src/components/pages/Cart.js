import React from 'react'
import CartItem from '../pages/CartItem';
import styled from 'styled-components';




const ShoppingCart = styled.div`
width: 600px;
height: 423px;
margin: 80px auto;
background: #FFFFFF;
box-shadow: 1px 2px 3px 0px rgba(0,0,0,0.10);
border-radius: 6px;
border: 2px solid black;

display: flex;
flex-direction: column;

@media (max-width: 800px) {
    width: 100%;
    height: auto;
    overflow: hidden;
    }
`;

const Title = styled.div`
height: 60px;
border-bottom: 1px solid #E1E8EE;
padding: 20px 30px;
color: #5E6977;
font-size: 18px;
font-weight: 400;
`; 

const Cart = ({cart, isLoggedIn }) =>  {
    debugger;
    //passa igenom en remove from cart funktion

if (!isLoggedIn) return (<div><h1>Du måste logga in för att kunna se din kundvagn!</h1></div>)



else { 
    return (




    
<ShoppingCart>
  <Title>
    Shopping Bag
  </Title>
{Object.keys(cart).length === 0 ? <h2>Oh no! You cart is empty!</h2> : cart.map(item => (
    <CartItem key={item.id} item={item} />
))}   
         
        </ShoppingCart>
    )
}}

export default Cart