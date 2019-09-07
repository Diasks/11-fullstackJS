import React, { Component } from 'react';
import styled from 'styled-components';

export const GameImage = styled.img`
width:100%;
height: 83%;
border-radius: 10px;
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

const Button = styled.button `
background-color: #fff;
color: #519e8a;
border-radius: 5px;
border: 2px solid #519e8a;

:hover {
    color: black;
    border: 2px solid black;
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
                this.props.searchUsers(this.state.query);
            }
    
    
    render() { 
return ( 
    <div> 
     
                <form onSubmit={this.onSubmit} className="form">
<Input type="text" name="query" placeholder="...search" value={this.state.query} onChange={this.onChange} />
<Button type="submit">search</Button>
                </form> 
           </div>
)


}

}
  




 
export default Search;