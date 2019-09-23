import React, { Fragment } from 'react';
import CartItem from '../pages/CartItem';
import styled from 'styled-components';
import { Headline } from './Register';
import { SearchTitle } from './Search';
import { AddToCartButton, ButtonDiv } from './Game';
import { FooterWrap, Copyright } from '../layout/Footer';

const ShoppingCart = styled.div`
  width: 600px;
  height: auto;
  margin: 80px auto;
  background: #ffffff;
  box-shadow: 1px 2px 3px 0px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  @media (max-width: 800px) {
    width: 100%;
    height: auto;
    overflow: hidden;
  }
`;

const MyNewFooterWrap = styled(FooterWrap)`
  margin-top: 50%;
  @media (min-width: 414px) {
    margin-top: 15%;
  }
  @media (min-width: 615px) {
    margin-top: 12%;
  }
  @media (min-width: 850px) {
    margin-top: 8%;
  }
  @media (min-width: 1280px) {
    margin-top: 32%;
  }
`;

const Title = styled.div`
  height: 60px;
  border-bottom: 1px solid #e1e8ee;
  padding: 20px 30px;
  color: #5e6977;
  font-size: 18px;
  font-weight: 400;
`;

const Cart = ({ cart, isLoggedIn, deleteFromCart, sendOrder, success }) => {
  if (!isLoggedIn)
    return (
      <Headline>
        You need to be logged in to access your cart!
        <span role='img' aria-label='smileywithsunglasses'>
          😎
        </span>
      </Headline>
    );
  else {
    return (
      <Fragment>
        <ShoppingCart>
          <Title>Shopping Bag</Title>
          {success ? <SearchTitle>order sent!</SearchTitle> : null}
          {Object.keys(cart).length === 0 ? (
            <Headline>
              Oh no! You cart is empty!
              <span role='img' aria-label='dizzyemoji'>
                😵
              </span>
            </Headline>
          ) : (
            cart.map(item => (
              <CartItem
                key={item.id}
                item={item}
                deleteFromCart={deleteFromCart}
              />
            ))
          )}
          {Object.keys(cart).length === 0 ? null : (
            <ButtonDiv>
              <AddToCartButton
                onClick={() => {
                  sendOrder(cart);
                }}
              >
                order
              </AddToCartButton>
            </ButtonDiv>
          )}
        </ShoppingCart>
        <MyNewFooterWrap>
        
          <Copyright>© GAMEOVER 2019</Copyright>
        </MyNewFooterWrap>
      </Fragment>
    );
  }
};

export default Cart;
