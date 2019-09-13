import React, { Component } from 'react'
import { GameWrapper } from './Games';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { StyledLink } from '../layout/Header';
import { Button } from './Search';

const GameFrame = styled.div`
    width: 50%;
    height: auto;
    margin: 10px;
    flex-direction: column;
    box-sizing: border-box;
    border-radius: 10px;
   box-shadow: 0px 10px 30px #555;
   display:flex;
`;

const ParaContainer = styled.p`
margin: 5px;
width:50%;
`;

const RatingStar = styled.span`
color: yellow;
`;

const ListGenre = styled.div`
list-style: none;
border-radius: 5px;
text-align: center;
padding: 5px;
background-color: #519e8a;
border: 1px solid black;
`;




export class Game extends Component {

componentDidMount () {
    debugger;
    this.props.getGame(this.props.match.params.slug);
}

render() {
    debugger;
 
    if (this.props.game === undefined || Object.keys(this.props.game).length === 0)
    { 
       debugger; 
       return (null) 
    } 

      else  {
        const { addToCart, isLoggedIn } = this.props;
        const { name, rating, released, clip, genres, price } = this.props.game[0];
debugger;
   return (
        <GameWrapper>
          <GameFrame> 
          <iframe title="preview" src={clip.clip}></iframe>
         <ParaContainer>{name}</ParaContainer> 
         <ParaContainer><RatingStar><FontAwesomeIcon icon={faStar} size="lg"/></RatingStar> {rating} </ParaContainer>
        <ParaContainer> {released} </ParaContainer>
        <ParaContainer>{price}:-</ParaContainer>
         <ParaContainer>
       {genres.map((genre, i) =>(

<ListGenre key={i}>{genre.name}</ListGenre>

))}      </ParaContainer>
        
            {isLoggedIn ?  <Button onClick={() => {addToCart(this.props.game[0])}}><FontAwesomeIcon icon={faCartPlus} size="lg"/>add to cart</Button> : null }
            <StyledLink to="/" className="btn btn-light">Go Back</StyledLink>
            </GameFrame>
        </GameWrapper>
    )
}
}
}

export default Game
