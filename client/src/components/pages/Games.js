import React from 'react'
import GameItem from './GameItem';
import styled from 'styled-components';

const GameWrapper = styled.div`
width: 100%;
height: auto;
display: flex;
flex-direction: row;
justify-content: center;
flex-flow: wrap;
border: 1px solid red;
`;

const Games = ({games}) => {
    debugger;
    return (
        <GameWrapper>
            {games.map(game => (
                  <GameItem key={game.id} game={game} />
              ))}  
        </GameWrapper>
    )
}

export default Games
