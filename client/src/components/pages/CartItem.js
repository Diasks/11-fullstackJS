import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faDollarSign} from '@fortawesome/free-solid-svg-icons'


const DivButton = styled.div`
position: relative;
padding-top: 30px;
margin-right: 60px;
@media (max-width: 800px) {
    margin-right: 20px;
}
`;

const Item = styled.div`
padding: 20px 30px;
height: 120px;
display: flex;
:nth-child(3) {
    border-top:  1px solid #E1E8EE;
    border-bottom:  1px solid #E1E8EE;
}
    @media (max-width: 800px) {
        height: auto;
    flex-wrap: wrap;
    justify-content: center;
    }
`;

const DeleteButton = styled.span`
  display: inline-block;
  width: 18px;
  height: 17px;
  @media (max-width: 800px) {
    margin-right: 20px;
}
`;

const GameImageDiv = styled.div`
    margin-right: 50px;
    @media (max-width: 800px) {
        width: 100%;
        text-align: center;
        margin: 6px 0;
    }
`;

const GameDescription = styled.div`
padding-top: 10px;
margin-right: 60px;
width: 115px;
@media (max-width: 800px) {
    width: 100%;
    text-align: center;
    margin: 6px 0;
}
`;

const GameDescriptionSpan = styled.span`
display: block;
font-size: 14px;
color: #43484D;
font-weight: 400;
:first-child {
    margin-bottom: 5px;
  }
:last-child {
    font-weight: 300;
    margin-top: 8px;
    color: #86939E;
  }
  @media (max-width: 800px) {
    width: 100%;
    text-align: center;
    margin: 6px 0;
}
`;


const GameImage = styled.img`
width:100%;
height: 83%;
border-radius: 10px;
@media (max-width: 800px) {
    width: 50%;
}
`;


const ItemPrice = styled.div`
width: 83px;
padding-top: 27px;
text-align: center;
font-size: 16px;
color: black;
font-weight: 300;
`;

const CartItem = ({item: { name, id, image, price}, deleteFromCart}) =>  {
            return (
    <Item>
    <DivButton>
      <DeleteButton onClick={() => {deleteFromCart(id)}}><FontAwesomeIcon icon={faTrashAlt} size="lg"/></DeleteButton>
    </DivButton>
    <GameImageDiv>
      <GameImage src={image} alt="" />
    </GameImageDiv>
    <GameDescription>
      <GameDescriptionSpan>{name} </GameDescriptionSpan>
    </GameDescription>
     <ItemPrice><FontAwesomeIcon icon={faDollarSign} size="lg"></FontAwesomeIcon>{price}</ItemPrice>
  </Item>
        )    
}

export default CartItem
