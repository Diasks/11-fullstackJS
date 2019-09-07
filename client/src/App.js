import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import Search from "./components/pages/Search";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import axios from 'axios';

class App extends Component {
  state = {
users: []
  }

//refaktorisera till async funktion för att söka i databasen
searchUsers = async query => {
  debugger;
    const res = await axios.get(`http://localhost:4000/search/${query}`);
  debugger;
    this.setState({users: res.data.data })
  }


render() { 
  //refaktorisera till att dekonstruera state för o ta ut spel från state
  const { users } = this.state;

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
<Search 
  searchUsers={this.searchUsers}/>
    )} />
    </Switch>
    <Footer />
    </Router>
   
    </div>
  );
}}

export default App;
