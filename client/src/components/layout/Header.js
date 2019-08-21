import React, { Component } from "react";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import Suggestions from '../pages/Suggestions';
import doSomething from '../pages/Suggestions';


const NavWrap = styled.div`
width: 100%
border-bottom: 1px solid black;
display: flex;
background-color: lightgrey;
`;

const IconWrapSearch = styled.div`
padding-top: 12px;
margin: 2px;
margin-right: 10px;
`;

const IconWrap = styled.div`
padding: 10px;
margin: 5px;
`;

const Input  = styled.input`
background-color: white;
padding: 8px 8px;
border-radius: 5px;
outline: none;

::placeholder {
    font-size: 1.1em;
    font-weight: lighter;
    color: #999
  }
`;

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: []
              }
              this.showValue = this.showValue.bind(this);
        };




  showValue(e){
    debugger;
    e.preventDefault();
    console.log(this.nameValue.value)
    let query = this.nameValue.value;
    axios.get(`http://localhost:4000/search/${query}`)
    .then((data) => {
      debugger;
      console.log(data.data);
      this.setState({results: data.data})
      debugger;
    })
}

   
    render() 
    {
        return (
        <div> 
            <NavWrap> 
            <Input placeholder="search for.." ref={el=> this.nameValue=el}></Input>
            <IconWrapSearch><FontAwesomeIcon icon={faSearch} size="lg" onClick={this.showValue} /></IconWrapSearch>
          
            <IconWrap><FontAwesomeIcon icon={faUser} size="lg" /></IconWrap>
            <IconWrap><FontAwesomeIcon icon={faShoppingCart} size="lg" /></IconWrap>
           
            </NavWrap>
            
<div>
 {this.state.results && 
         <Suggestions results={this.state.results} />
         }
</div>

</div>
        )}
  }
    export default Header;