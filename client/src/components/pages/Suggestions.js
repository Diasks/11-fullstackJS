import React from 'react';
import styled from 'styled-components';

const InsideBox = styled.div`
width: 25%;
display: flex;
flex-direction: column;
padding: 20px 40px;
border-radius: 20px;
box-shadow: 0px 10px 50px #555;
background-color:#FFFAFA;
border: 1px solid green;
`;

const ObjectFrame  = styled.div`
width: 100%;
height: auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const GameName   = styled.h1`
text-align: center;
width: 100%;
font-size: 12px;
color: #111;
font-weight: lighter;
`;

const GameImage = styled.img`
width:100%;
height: 83%;
border-radius: 10px;
`;

export const doSomething = (props) => {

    debugger;
    console.log(props);
    
    return  ( <h1>{props.name}</h1>);
    
}


const Suggestions = (props) => {
    debugger;
    if (props.results.data !== undefined) { 
        debugger;
    console.log(props.results.data)
    const games = props.results.data.map((game, i) =>
     (
 <div className="box" key={i} > 
      <ObjectFrame> 
      {/* <iframe title="preview" src={game.clip.clip}></iframe> */}
<p>{game.released} </p> 
{game.genres.map((genre, i) =>(
    <p key={i}>{genre.name}</p>
))}


{game.platforms.map((p, i) =>(
    <p key={i}>{p.platform.name}</p>
))}
   <GameName onClick={doSomething.bind(this, game)}>  {game.name} <button>hej!</button> </GameName>
   <GameImage src={game.background_image} alt="games" />
 
  </ObjectFrame>
  </div>
     )
 ) 
return (games)}
else {
    return (
        null);
}

} 
export default Suggestions;