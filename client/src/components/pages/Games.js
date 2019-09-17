import React from 'react'
import GameItem from './GameItem';
import styled from 'styled-components';

export const GameWrapper = styled.div`
width: 100%;
height: auto;
display: flex;
flex-direction: row;
justify-content: center;
flex-flow: wrap;
`;

const StyledHeaderThree = styled.h3`
text-align: center;
font-size: 0.8em;
color: #222;
font-weight: lighter;
`;

const Games = ({games}) => {
    debugger;


    return (
        <GameWrapper>
            {games === '' ? <StyledHeaderThree>sorry we dont have this game, try something new for once..</StyledHeaderThree> : games.map(game => (
                  <GameItem key={game.id} game={game} />
              ))}  
        </GameWrapper>
    )
}

export default Games
