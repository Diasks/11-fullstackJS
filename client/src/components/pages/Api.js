import React, { Component } from 'react';
import styled from 'styled-components';
import "../../App.css";
import axios from 'axios';

export const Wrapper = styled.div`
height: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color: #519e8a;
border: 1px solid orange;
`;

export const InsideBox = styled.div`
width: 25%;
display: flex;
flex-direction: column;
padding: 20px 40px;
border-radius: 20px;
box-shadow: 0px 10px 50px #555;
background-color:#FFFAFA;
border: 1px solid green;
`;

export const ObjectFrame  = styled.div`
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

class Api extends Component {
constructor(props) {
    super(props);
    this.state = {
       
games: [],
game: null,
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handleClick = this.handleClick.bind(this);
    
}

handleChange(game){
  debugger;
    this.setState({game : game}, ()=>{
      debugger;
      console.log('Data 1 changed by Sidebar');
    })
  }


  


handleCustomerClick = (event) => {
    console.log("hej!");
}




componentDidMount() {

axios.get('http://localhost:4000/game')
.then(results => {

    console.log(results.data)
    let games = results.data.map((game, i) => {
      
return (
   
<div className="box" key={i} > {game.results}
         <ObjectFrame onClick={this.handleChange.bind(this, game)}>
     <GameImage src={game.background_image} alt="games" />
     {' '}
   <GameName>  {game.name} <button onClick={this.handleCustomerClick}>varukorg</button>
  </GameName>
    </ObjectFrame> 
  </div>


)
    })
 
    this.setState({games: games});
    console.log("state", this.state.games);
})
}







render() {
  debugger;

if (this.state.game != null) 
{ 
  debugger;
  const game = this.state.game;
  const map = new Map(Object.entries(game));
  console.log(map);
  debugger;

  return( 
  <div>
<h2>{map.get('name')}</h2>
<img src ={map.get('background_image')} alt="game"/> 
 <p> {map.get('released')}, {map.get('playtime')}</p> {console.log(map.get('genres').map((genre) => ({
   genre: genre['name']
 })))} 
  </div>);
}
else {
return (
<div> 
   <div className="container">
   <div> 
       </div>
{this.state.games}
</div>
</div>
)}
}
}


   

export default Api;