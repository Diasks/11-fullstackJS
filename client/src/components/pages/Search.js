import React, { Component } from 'react';
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

const SearchTitle = styled.h2`
text-align: center;
`;

const SearchForm = styled.form`
text-align: center;
`;

export const Button = styled.button `
background-color: white;
color: black;
margin: 5px;
padding: 5px;
border-radius: 5px;
border: 1px solid black;
:hover {
    color: #519e8a;
    border: 1px solid #519e8a;
  }

`;

class Search extends Component {
    state = {
        query: ''
            };
        
       
        onChange = (e) => 
        {
            this.setState({[e.target.name]: e.target.value});
    }

        onSubmit = (e) => {
            e.preventDefault();
                this.props.searchGames(this.state.query);
            }
    
    
    render() { 
return ( 
    <div> 
     
                <SearchForm onSubmit={this.onSubmit}>
                    <SearchTitle> <FontAwesomeIcon icon={faGamepad} size="2x"/> Search for a game</SearchTitle>
<Input type="text" name="query" placeholder="...search" value={this.state.query} onChange={this.onChange} />
<Button type="submit"><FontAwesomeIcon icon={faSearch} size="lg"/>Search</Button>
                </SearchForm> 
           </div>
)


}

}
  




 
export default Search;