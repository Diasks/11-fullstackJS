import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Box = styled.div`
width: 40%;
height: 150px;
margin: 10px;
box-sizing: border-box;
border-radius: 10px;
box-shadow: 0px 10px 30px #555;
display:flex;
background-position: center;
background-size: 200px 200px;
background-repeat: no-repeat;

@media (min-width: 501px) {
    height: 200px;
    background-position: center;
    background-size: 500px 200px;
    background-repeat: no-repeat; 
}
    @media (min-width:  1250px) {
        height: 350px;
        background-position: center;
        background-size: 800px 350px;
        background-repeat: no-repeat; 
}
  `;


const StyledLink = styled(Link)`
align-self: flex-end;
text-align: right;
color: white;
    text-decoration: none;
font-weight: bold;
    :hover {
        color: #B0B0B0; 
    }
    &:focus, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

function GameItem({game: {name, background_image, slug}}) {
    debugger;
    return (
        <Box style={{backgroundImage: `url(${background_image})`}}>
            <StyledLink to={`/game/${slug}`}>{name}</StyledLink>
            </Box>
    )
}

export default GameItem
