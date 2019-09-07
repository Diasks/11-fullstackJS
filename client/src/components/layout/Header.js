import React from "react";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

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



const Header = () => {

    
        return (
        <div> 
            <NavWrap> 
            <Link to="/search"> <IconWrapSearch><FontAwesomeIcon icon={faSearch} size="lg"/></IconWrapSearch> </Link>
            <Link to="/profile"> <IconWrap><FontAwesomeIcon icon={faUser} size="lg"/></IconWrap> </Link>
            <Link to="/cart">  <IconWrap><FontAwesomeIcon icon={faShoppingCart} size="lg" /></IconWrap>  </Link>
            </NavWrap>
</div>
        )}
  
    export default Header;