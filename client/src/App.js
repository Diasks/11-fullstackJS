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
import Cart from './components/pages/Cart';
import Dashboard from './components/pages/Dashboard';

class App extends Component {
  state = {
games: [],
game: [],
isLoggedIn: false,
isAdmin: false,
user: {},
cart: []
  }

  //hämta inloggad användare
componentDidMount() {
  debugger;
  this.getLoggedInUser();

}

  getLoggedInUser = () => {
    debugger;
  let token = localStorage.getItem('jwt');
  debugger;
  let user = JSON.parse(localStorage.getItem('user'));
  if (token != null) {
    debugger;
    let isAdmin = JSON.parse(localStorage.getItem('user')).role;
    if (isAdmin === "admin") {
      debugger;
      this.setState({isAdmin: true})
    }
  }

 
 

  debugger;
  if (token) {
    this.setState({isLoggedIn: true, user: user})
    debugger;
  }



  }


  addToCart = (props) =>
  { 
    debugger;
    const myObj = {
      id: props.id,
  name: props.name,
  image: props.background_image
    }
    //axios posta till users cart
    alert(`du har lagt ${myObj} i kundvagnen`);
    this.setState({cart:[...this.state.cart, myObj]});
    debugger;
    console.log('hej');
  }


searchUser = async (updatedUser, _id) => {

debugger;
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
  const { games, game, user, cart, isLoggedIn, isAdmin } = this.state;

  return (
    <div> 

    <Router>
    <Header isLoggedIn={isLoggedIn} isAdmin={isAdmin}/>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Switch>
          <Route exact path='/profile' render={props=> (
            <Profile getLoggedInUser={this.getLoggedInUser} isLoggedIn={isLoggedIn} user={user} searchUser={this.searchUser}/>
          )}/> 
    <Route 
    exact 
    path='/' render={props => (
      <Fragment>
      <Startpage isLoggedIn={isLoggedIn}/>
<Search 
  searchGames={this.searchGames}/>
    <Games games={games}/>
     </Fragment>
    )} />
     <Route exact path="/game/:slug" render={props => (
      <Game {... props} getGame= {this.getGame} game={game} addToCart={this.addToCart} isLoggedIn={isLoggedIn}/>
    )}/>
 <Route exact path="/cart" render={props => (  
<Cart cart={cart} isLoggedIn={isLoggedIn}/>
    )}/>
    </Switch>
    <Footer />
    </Router>
   
    </div>
  );
}}

export default App;
