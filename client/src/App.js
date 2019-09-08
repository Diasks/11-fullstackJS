import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import Search from "./components/pages/Search";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import axios from 'axios';
import Startpage from './components/pages/Startpage';
import Games from './components/pages/Games';
import Game from './components/pages/Game';
import Profile from './components/pages/Profile';

class App extends Component {
  state = {
games: [],
game: [],
isLoggedIn: false,
user: {},
  }

  //hämta inloggad användare
  getLoggedInUser = () => {
    debugger;
  let token = localStorage.getItem('jwt');
  debugger;
  let user = JSON.parse(localStorage.getItem('user'));
  debugger;
  if (token) {
    this.setState({isLoggedIn: true, user: user})
    debugger;
  }
  }


searchUser = async (updatedUser, _id) => {
//   const updatedUser = {
//     telephone: this.state.telephone,
//     address: this.state.address,
//     zipcode: this.state.zipcode,
//     city: this.state.city,
// };
debugger;
// let _id = this.props.user._id;
var token = localStorage.getItem("jwt");
debugger;
        var config = {
            headers: {'x-access-token': token}
        }
        debugger;
    const result = await axios.patch(`http://localhost:4000/user/${_id}`,{ updatedUser }, config);
debugger;
this.setState({user: result.data});
localStorage.setItem('user', JSON.stringify(result.data));
debugger;

}


 
  

//refaktorisera till async funktion för att söka i databasen
searchGames = async query => {
  debugger;
    const res = await axios.get(`http://localhost:4000/search/${query}`);
  debugger;
    this.setState({games: res.data.data })
  }

//hämta specifikt spel från min databas baserat på vilken man tryckt på för att ser mer detaljerat
getGame = async (slug) => {
  debugger;
const res = await axios.get(`http://localhost:4000/game/${slug}`);
debugger;
this.setState({game: res.data});

}



render() { 
  //refaktorisera till att dekonstruera state för o ta ut spel från state
  const { games, game, user } = this.state;

  return (
    <div> 

    <Router>
    <Header />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Switch>
          <Route exact path='/profile' render={props=> (
            <Profile getLoggedInUser={this.getLoggedInUser} user={user} searchUser={this.searchUser}/>
          )}/> 
    <Route 
    exact 
    path='/' render={props => (
      <Fragment>
      <Startpage/>
<Search 
  searchGames={this.searchGames}/>
    <Games games={games}/>
     </Fragment>
    )} />
     <Route exact path="/game/:slug" render={props => (
      <Game {... props} getGame= {this.getGame} game={game}/>
    )}/>
 
    </Switch>
    <Footer />
    </Router>
   
    </div>
  );
}}

export default App;
