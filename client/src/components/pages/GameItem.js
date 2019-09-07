import React from 'react'
import { Link } from 'react-router-dom';

function GameItem({game: {name, id, background_image, slug}}) {
    debugger;
    return (
        <div>
            <img src={background_image} alt="game"/>
            <h3>{name} {id}</h3> 
            <Link to={`/game/${slug}`}>Details</Link>
            </div>
    )
}

export default GameItem
