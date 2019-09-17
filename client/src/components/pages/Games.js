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

const Games = ({games}) => {
    debugger;


    return (
        <GameWrapper>
            {games === '' ? <h2>sorry we dont have this game</h2> : games.map(game => (
                  <GameItem key={game.id} game={game} />
              ))}  
        </GameWrapper>
    )
}

export default Games
