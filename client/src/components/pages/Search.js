import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

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

export const GameImage = styled.img`
width:100%;
height: 83%;
border-radius: 10px;
`;

const Input  = styled.input`
background-color: white;
padding: 8px 8px;
border-radius: 5px;
outline: none;

::placeholder {
    font-size: 1.1em;
    font-weight: lighter;
    color: #999
  }
`;

const Button = styled.button `
background-color: #fff;
color: #519e8a;
border-radius: 5px;
border: 2px solid #519e8a;

:hover {
    color: black;
    border: 2px solid black;
  }

`;

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            specificGame: null
              }
              this.showValue = this.showValue.bind(this);
              this.doSomething = this.doSomething.bind(this);
        };


        showValue(e){
            debugger;
            e.preventDefault();
            console.log(this.nameValue.value)
            let query = this.nameValue.value;
            axios.get(`http://localhost:4000/search/${query}`)
            .then((data) => {
              debugger;
              console.log(data.data);
              this.setState({results: data.data})
              debugger;
             
            })
        }

         Suggestions = (props) => {
            debugger;
             if (props.results.data !== undefined && props.results.data.length === 0) {
                debugger;
    return (<p>no game</p>)
            }
             else if (props.results.data !== undefined) { 
                debugger;
            console.log(props.results.data)
            const games = props.results.data.map((game, i) =>
             (
         <div className="box" key={i} > 
              <ObjectFrame> 
        
    
        
           <GameName onClick={this.doSomething.bind(this, game)}>  {game.name} <button>hej!</button> </GameName>
           <GameImage src={game.background_image} alt="games" />
         
          </ObjectFrame>
          </div>
             )
         ) 
        return (games)}
    
        else {
            debugger;
            return (
                null);
        }
    }


  doSomething(game) {
      debugger;
      this.setState({specificGame: game}, ()=> {
          debugger;
          console.log("blablabla");
      })
       }

   

    render() { 
if (this.state.specificGame != null) {
    const game = this.state.specificGame;
return ( 
    <div> 
  <button onClick={() => this.props.history.goBack()}>Back</button>
    <h2> {game.name}</h2>
           <iframe title="preview" src={game.clip.clip}></iframe>
           <p> Realese date: {game.released} </p> 
           <ul>Genres:
           {game.genres.map((genre, i) =>(

            <li key={i}>{genre.name}</li>
      
        ))}      </ul>
        
        <ul> Platforms:
        {game.platforms.map((p, i) =>(
 
            <li key={i}>{p.platform.name}</li>
          
        ))}   </ul>

        {game.short_screenshots.map((s, i) => (
            <div key={i}> <GameImage src={s.image} alt="screenshots" /></div>
        ))}
           </div>
)


}
  


        debugger;
        return ( 
<div> 


        }
            <Input placeholder="search for.." ref={el=> this.nameValue=el}></Input> <Button onClick={this.showValue}>search</Button>
          
<div> 
 {this.state.results && 
         <this.Suggestions results={this.state.results} />
         }
</div>

        
</div>
         );
    }
}
 
export default Search;