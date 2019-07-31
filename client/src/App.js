import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Register from "./components/pages/Register";

function App() {
  return (
    <Router>
        <Route path="/register" component={Register} />
    </Router>
    
  );
}

export default App;
