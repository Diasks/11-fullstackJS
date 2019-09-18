import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad, faSearch } from '@fortawesome/free-solid-svg-icons'


export const GameImage = styled.img`
width:100%;
height: 83%;
border-radius: 10px;
`;

const Input  = styled.input`
width:50%
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

export const SearchTitle = styled.h2`
text-align: center;
font-size: 1em;
color: #222;
font-weight: lighter;
`;

const SearchForm = styled.form`
text-align: center;
`;

export const Button = styled.button `
color: black;
background-color: #F5F5F5;
border: 1px solid #484848;
margin: 5px;
padding: 5px;
border-radius: 5px;
:hover {
    background-color: #B0B0B0;
    color: #fff;
    border: 1px solid #fff;
  }

`;

class Search extends Component {
    state = { query: ''};
        
       
        onChange = (e) => {
            this.setState({[e.target.name]: e.target.value});
    }

        onSubmit = (e) => {
            e.preventDefault();
                this.props.searchGames(this.state.query);
            }
    
    
    render() { 
return ( 
    <Fragment> 
                <SearchForm onSubmit={this.onSubmit}>
                <SearchTitle>   <FontAwesomeIcon icon={faGamepad} size="2x"/> </SearchTitle>
                    <SearchTitle>  Search for a game</SearchTitle>
<Input type="text" name="query" placeholder="...search" value={this.state.query} onChange={this.onChange} />
<Button type="submit"><FontAwesomeIcon icon={faSearch} size="lg"/>Search</Button>
                </SearchForm> 
           </Fragment>
)}
}


export default Search;