import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import Header from "./components/layout/Header";

function App() {
  return (
    <div> 
    <Header />
    <Router>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
    </Router>
    </div>
  );
}

export default App;
