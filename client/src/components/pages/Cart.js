import React from 'react'
import CartItem from '../pages/CartItem';
import styled from 'styled-components';
import  {  Headline} from './Register';
import { SearchTitle } from './Search';
import {AddToCartButton, ButtonDiv} from './Game';


const ShoppingCart = styled.div`
width: 600px;
height: auto;
margin: 80px auto;
background: #FFFFFF;
box-shadow: 1px 2px 3px 0px rgba(0,0,0,0.10);
border-radius: 6px;

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

const Cart = ({cart, isLoggedIn, deleteFromCart, sendOrder, success  }) =>  {
    debugger;
    //passa igenom en remove from cart funktion

if (!isLoggedIn) return (<div><Headline>You need to be logged in to access your cart!   <span role="img" aria-label="smileywithsunglasses">😎</span></Headline></div>)



else { 
    return (




    
<ShoppingCart>
{success ? <SearchTitle>order sent!</SearchTitle> : null}
  <Title>
    Shopping Bag
   
  
  </Title>
{Object.keys(cart).length === 0 ? <Headline>Oh no! You cart is empty!   <span role="img" aria-label="dizzyemoji">😵</span>  </Headline> : cart.map(item => (
    <CartItem key={item.id} item={item} deleteFromCart={deleteFromCart}  />
))}   

        {Object.keys(cart).length === 0 ? null :  <ButtonDiv><AddToCartButton onClick={() => {sendOrder(cart)}}>order</AddToCartButton></ButtonDiv>}

        </ShoppingCart>
    )
}}

export default Cart