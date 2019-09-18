/* eslint-disable no-unused-vars */
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
cart: [],
success: false,
orders: [],
offlineAlert: !navigator.onLine
  }

  //hämta inloggad användare
componentDidMount() {
  window.addEventListener('online', () => {
    this.setState({offlineAlert: false})
  });
  window.addEventListener('offline', () => {
    this.setState({offlineAlert: true})
  });
  debugger;
  this.getLoggedInUser();
  this.getCart();
  this.getOrders();
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


  addToCart = async (props) => { 
debugger;


let user = JSON.parse(localStorage.getItem('user'))._id;
const token = localStorage.getItem("jwt");
const config = {
  headers: {'x-access-token': token}
}
  debugger; 
    const myObj = {
      id: props.id,
  name: props.name,
  image: props.background_image,
  price: props.price
    }
    const result = await axios.patch(`http://localhost:4000/cart/${user}`,{ myObj }, config);
debugger;
    this.setState({cart:[...this.state.cart, myObj], success: true});
    debugger;
    this.changeSuccess();
    return result;


  } 

changeSuccess = async () => {
debugger;
this.setState({success: false});
debugger;
  }




searchUser = async (updatedUser, _id) => {
        debugger;
 
          const token = localStorage.getItem("jwt");
const config = {
  headers: {'x-access-token': token}
}
    const result = await axios.patch(`http://localhost:4000/user/${_id}`,{ updatedUser }, config);
debugger;
this.setState({user: result.data});
localStorage.setItem('user', JSON.stringify(result.data));
debugger;
} 





sendOrder = async (cart) => {

debugger;

debugger;
const token = localStorage.getItem("jwt");
const config = {
  headers: {'x-access-token': token}
}
let user = JSON.parse(localStorage.getItem('user'))._id;
const myObj = cart.map(data => ({
id: data.id,
name: data.name,
image: data.image,
price: data.price
}));



debugger;
    const result = await axios.patch(`http://localhost:4000/order/${user}`, {myObj}, config);

    debugger;
this.setState({success: true, orders: result.data.orders})
this.changeSuccess();
debugger;
    this.removeCartItems();

    this.getOrders();
  } 


removeCartItems = async () => {

debugger;

  const token = localStorage.getItem("jwt");
const config = {
  headers: {'x-access-token': token}
}
  let user = JSON.parse(localStorage.getItem('user'))._id;
  const result = await axios.patch(`http://localhost:4000/search/${user}`, config);
  debugger;
  this.setState({cart: []});
  debugger;
return result;
} 


getCart = async () => {
  debugger;
  const token = localStorage.getItem("jwt");
    debugger;
const config = {
  headers: {'x-access-token': token}
}
if (token != null) { 
  debugger;
  let user = JSON.parse(localStorage.getItem('user'))._id;
const res = await axios.get(`http://localhost:4000/cart/${user}`, config);
debugger;
this.setState({cart: res.data.cart});
}} 


getOrders = async () => {
  debugger;
  const token = localStorage.getItem('jwt');
  const config = {
    headers: {'x-access-token': token}
  }
if (token != null) { 
  debugger;

  let user = JSON.parse(localStorage.getItem('user'))._id;
const res = await axios.get(`http://localhost:4000/cart/${user}`, config);
debugger;
this.setState({orders: res.data.orders});
} } 



deleteFromCart = async (id) => {
  debugger;
  let token = localStorage.getItem('jwt');
    let user = JSON.parse(localStorage.getItem('user'))._id;
    const config = {
      headers: {'x-access-token': token}
    }
  let gameId = id;
debugger;
    debugger;
const res = await axios.patch(`http://localhost:4000/games/${user}`, {gameId}, config);
debugger;
this.setState({cart: res.data.cart});

} 

//refaktorisera till async funktion för att söka i databasen
searchGames = async query => {
  debugger;

    const res = await axios.get(`http://localhost:4000/search/${query}`);
  debugger;
  if (Object.keys(res.data.data).length === 0)
  {
    debugger;
    this.setState({games: ''})
  }
  else {
    debugger;
    this.setState({games: res.data.data })
  }
} 

//hämta specifikt spel från min databas baserat på vilken man tryckt på för att ser mer detaljerat
getGame = async (slug) => {

  debugger;
const res = await axios.get(`http://localhost:4000/games/${slug}`);
debugger;
this.setState({game: res.data});
} 

logoutUser = async () =>
{
  // eslint-disable-next-line no-unused-vars
  const {isAdmin} = this.state;
  const {isLoggedIn} = this.state

  debugger;

  this.setState({isAdmin: false});
  this.setState({isLoggedIn: false});
  
  
  localStorage.clear(); 
  debugger;
}



render() { 

  //refaktorisera till att dekonstruera state för o ta ut spel från state
  const { games, game, user, cart, isLoggedIn, isAdmin, success, orders } = this.state;

  return (
    <div> 
    <div>{this.state.offlineAlert &&
    "You are offline. Your changes will sync once you have an internet connection again."
    }</div>
    

    <Router>
    <Header isLoggedIn={isLoggedIn} logoutUser={this.logoutUser} isAdmin={isAdmin}/>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Switch>
          <Route exact path='/profile' render={props=> (
            <Profile getLoggedInUser={this.getLoggedInUser} isLoggedIn={isLoggedIn} user={user} searchUser={this.searchUser} getOrders={this.getOrders} orders={orders}/>
          )}/> 
    <Route 
    exact 
    path='/' render={props => (
      <Fragment>
      <Startpage isLoggedIn={isLoggedIn}/>
<Search 
  searchGames={this.searchGames}/>
    <Games games={games} success={success}/>
     </Fragment>
    )} />
     <Route exact path="/game/:slug" render={props => (
      <Game {... props} getGame= {this.getGame} game={game} addToCart={this.addToCart} success={success} isLoggedIn={isLoggedIn}/>
    )}/>
 <Route exact path="/cart" render={props => (  
<Cart cart={cart} isLoggedIn={isLoggedIn} deleteFromCart={this.deleteFromCart} sendOrder={this.sendOrder} success={success}/>
    )}/>
    </Switch>
    <Footer />
    </Router>
   
    </div>
  );
}}

export default App;
