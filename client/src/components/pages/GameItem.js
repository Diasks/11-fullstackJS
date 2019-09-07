import React from 'react'

function GameItem({game: {name, id, background_image}}) {
    debugger;
    return (
        <div className="card text-center">
            <img src={background_image} alt="" className="round-img" style={{width: '60px'}}/>
            <h3>{name} {id}</h3> 
 
            </div>
    )
}

export default GameItem
