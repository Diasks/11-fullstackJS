import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
 
export class Game extends Component {

componentDidMount () {
    debugger;
    this.props.getGame(this.props.match.params.slug);
}

render() {
    debugger;
 
    if (this.props.game === undefined || Object.keys(this.props.game).length === 0)
    { 
       debugger; 
       return (null) 
    } 

      else  {
        const { name, rating, released, clip, genres } = this.props.game[0];
debugger;
   return (
        <Fragment>
         {name}, rating: {rating}, released: {released} <iframe title="preview" src={clip.clip}></iframe>
         <ul>
       {genres.map((genre, i) =>(

<li key={i}>{genre.name}</li>

))}      </ul>
            <Link to="/" className="btn btn-light">Back to search</Link>
        </Fragment>
    )
}
}
}

export default Game
