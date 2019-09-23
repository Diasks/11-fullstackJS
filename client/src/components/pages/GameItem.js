import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Box = styled.div`
width: 40%;
height: 200px;
margin: 10px;
box-sizing: border-box;
border-radius: 10px;
box-shadow: 0px 10px 30px #555;
display:flex;
background-position: center;
background-size: cover;
background-repeat: no-repeat;

  `;

const StyledLink = styled(Link)`
  align-self: flex-end;
  text-align: right;
  color: white;
  text-decoration: none;
  font-weight: bold;
  :hover {
    color: #b0b0b0;
  }
  &:focus,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

function GameItem({ game: { name, background_image, slug } }) {
  debugger;
  return (
    <Box style={{ backgroundImage: `url(${background_image})` }}>
      <StyledLink to={`/game/${slug}`}>{name}</StyledLink>
    </Box>
  );
}

export default GameItem;
