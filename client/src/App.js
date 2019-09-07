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

class App extends Component {
  state = {
games: []
  }

//refaktorisera till async funktion för att söka i databasen
searchGames = async query => {
  debugger;
    const res = await axios.get(`http://localhost:4000/search/${query}`);
  debugger;
    this.setState({games: res.data.data })
  }


render() { 
  //refaktorisera till att dekonstruera state för o ta ut spel från state
  const { games } = this.state;

  return (
    <div> 

    <Router>
    <Header />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Switch>
    <Route 
    exact 
    path='/' render={props => (
      <Fragment>
      <Startpage/>
<Search 
  searchGames={this.searchGames}/>
     </Fragment>
    )} />
 
    </Switch>
    <Footer />
    </Router>
   
    </div>
  );
}}

export default App;
