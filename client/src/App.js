import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Api from "./components/pages/Api";
import Profile from "./components/pages/Profile";
import Dashboard from "./components/pages/Dashboard";
import Startpage from "./components/pages/Startpage";

function App() {
  return (
    <div> 
    <Header />
    <Router>
    <Route exact path="/" component={Startpage} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/api" component={Api} />
        <Route path="/profile" component={Profile} />
        <Route path="/dashboard" component={Dashboard} />
    </Router>
    <Footer />
    </div>
  );
}

export default App;
