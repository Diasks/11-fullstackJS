import React from 'react'
import GameItem from './GameItem';

const Games = (games) => {
    debugger;
    return (
        <div>
            {games.map(game => (
                  <GameItem key={game.id} user={game} />
              ))}  
        </div>
    )
}

export default Games
