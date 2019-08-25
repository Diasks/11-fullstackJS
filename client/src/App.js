import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Cart from "./components/pages/Cart";

function App() {
  return (
    <div> 

    <BrowserRouter>
    <div> 
    <Header />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/cart" component={Cart} />
        <Footer />
        </div>
    </BrowserRouter>
  
    </div>
  );
}

export default App;
