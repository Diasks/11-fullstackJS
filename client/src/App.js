/* eslint-disable no-unused-vars */
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import Search from './components/pages/Search';
import Header from './components/layout/Header';
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
    isLoggedIn: false,
    isAdmin: false,
    user: {},
    cart: [],
    success: false,
    orders: [],
    offlineAlert: !navigator.onLine
  };

  componentDidMount() {
    window.addEventListener('online', () => {
      this.setState({ offlineAlert: false });
    });
    window.addEventListener('offline', () => {
      this.setState({ offlineAlert: true });
    });
  
    this.getLoggedInUser();
    this.getCart();
    this.getOrders();
  }

  getLoggedInUser = () => {
    let token = localStorage.getItem('jwt');
    let user = JSON.parse(localStorage.getItem('user'));
    if (token != null) {
      let isAdmin = JSON.parse(localStorage.getItem('user')).role;
      if (isAdmin === 'admin') {
        this.setState({ isAdmin: true });
      }
    }
    if (token) {
      this.setState({ isLoggedIn: true, user: user });
    }
  };

  addToCart = async props => {
    let user = JSON.parse(localStorage.getItem('user'))._id;
    let token = localStorage.getItem('jwt');
    let config = {
      headers: { 'x-access-token': token }
    };
    const myObj = {
      id: props.id,
      name: props.name,
      image: props.background_image,
      price: props.price
    };
    const result = await axios.patch(`/cart/${user}`, { myObj }, config);
    this.setState({ cart: [...this.state.cart, myObj], success: true });
    this.changeSuccess();
    return result;
  };

  changeSuccess = () => {
    this.setState({ success: false });
  };

  searchUser = async (updatedUser, _id) => {
    let token = localStorage.getItem('jwt');
    let config = {
      headers: { 'x-access-token': token }
    };
    const result = await axios.patch(`/user/${_id}`, { updatedUser }, config);
    const { user } = this.state;
    this.setState({ user: result.data });
    localStorage.setItem('user', JSON.stringify(result.data));
  };

  sendOrder = async cart => {
    let token = localStorage.getItem('jwt');
    let config = {
      headers: { 'x-access-token': token }
    };
    let user = JSON.parse(localStorage.getItem('user'))._id;
    const myObj = cart.map(data => ({
      id: data.id,
      name: data.name,
      image: data.image,
      price: data.price
    }));

    const result = await axios.patch(`/order/${user}`, { myObj }, config);

    this.setState({ success: true, orders: result.data.orders });
    this.changeSuccess();
    this.removeCartItems();
    this.getOrders();
  };

  removeCartItems = async () => {
    let token = localStorage.getItem('jwt');
    let config = {
      headers: { 'x-access-token': token }
    };
    let user = JSON.parse(localStorage.getItem('user'))._id;
    const result = await axios.patch(`/search/${user}`, config);
    this.setState({ cart: [] });
    return result;
  };

  getCart = async () => {
    let token = localStorage.getItem('jwt');
    let config = {
      headers: { 'x-access-token': token }
    };
    if (token != null) {
      let user = JSON.parse(localStorage.getItem('user'))._id;
      const res = await axios.get(`/cart/${user}`, config);
      this.setState({ cart: res.data.cart });
    }
  };

  getOrders = async () => {
    let token = localStorage.getItem('jwt');
    let config = {
      headers: { 'x-access-token': token }
    };
    if (token != null) {
      let user = JSON.parse(localStorage.getItem('user'))._id;
      const res = await axios.get(`/cart/${user}`, config);
      this.setState({ orders: res.data.orders });
    }
  };

  deleteFromCart = async id => {
    let token = localStorage.getItem('jwt');
    let user = JSON.parse(localStorage.getItem('user'))._id;
    let config = {
      headers: { 'x-access-token': token }
    };
    let gameId = id;
    const res = await axios.patch(`/games/${user}`, { gameId }, config);
    this.setState({ cart: res.data.cart });
  };

  searchGames = async query => {
    const res = await axios.get(`/search/${query}`);
    if (Object.keys(res.data.data).length === 0) {
      this.setState({ games: '' });
    } else {
      this.setState({ games: res.data.data });
    }
  };

  getGame = async slug => {
    const res = await axios.get(`/games/${slug}`);
    this.setState({ game: res.data });
  };

  logoutUser = async () => {
    const { isAdmin } = this.state;
    const { isLoggedIn } = this.state;

    this.setState({ isAdmin: false });
    this.setState({ isLoggedIn: false });

    localStorage.clear();
  };

  render() {
    const {
      games,
      game,
      user,
      cart,
      isLoggedIn,
      isAdmin,
      success,
      orders
    } = this.state;

    return (
      <Fragment>
        <div>
          {this.state.offlineAlert &&
            'You are offline. Your changes will sync once you have an internet connection again.'}
        </div>

        <Router>
          <Header
            isLoggedIn={isLoggedIn}
            logoutUser={this.logoutUser}
            isAdmin={isAdmin}
          />
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
          <Route path='/dashboard' component={Dashboard} />
          <Switch>
            <Route
              exact
              path='/profile'
              render={props => (
                <Profile
                  getLoggedInUser={this.getLoggedInUser}
                  isLoggedIn={isLoggedIn}
                  user={user}
                  searchUser={this.searchUser}
                  getOrders={this.getOrders}
                  orders={orders}
                />
              )}
            />
            <Route
              exact
              path='/'
              render={props => (
                <Fragment>
                  <Startpage isLoggedIn={isLoggedIn} />
                  <Search searchGames={this.searchGames} />
                    
                  <Games games={games} success={success} />
                </Fragment>
              )}
            />
            <Route
              exact
              path='/game/:slug'
              render={props => (
                <Game
                  {...props}
                  getGame={this.getGame}
                  game={game}
                  addToCart={this.addToCart}
                  success={success}
                  isLoggedIn={isLoggedIn}
                />
              )}
            />
            <Route
              exact
              path='/cart'
              render={props => (
                <Cart
                  cart={cart}
                  isLoggedIn={isLoggedIn}
                  deleteFromCart={this.deleteFromCart}
                  sendOrder={this.sendOrder}
                  success={success}
                />
              )}
            />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;
