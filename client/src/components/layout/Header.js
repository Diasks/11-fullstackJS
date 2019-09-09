import React from "react";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faShoppingCart, faHome, faUserCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const NavWrap = styled.div`
width: 100%
border-bottom: 1px solid black;
display: flex;
background-color: lightgrey;
`;

const IconWrap = styled.div`
padding: 10px;
margin: 5px;
color:#519e8a;
:hover {
    color: black;
  }
`;

export const StyledLink = styled(Link)`
color: #519e8a;
    text-decoration: none;
font-weight: bold;
    &:hover {
        color: black; 
    }

    &:focus, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;


const Header = ({isLoggedIn, isAdmin}) => {

        return (
        <div> 
            <NavWrap> 
            <Link to="/"> <IconWrap><FontAwesomeIcon icon={faHome} size="lg"/></IconWrap> </Link>
            <Link to="/profile"> <IconWrap><FontAwesomeIcon icon={faUser} size="lg"/></IconWrap> </Link>
            <Link to="/cart">  <IconWrap><FontAwesomeIcon icon={faShoppingCart} size="lg" /></IconWrap>  </Link>
            {!isLoggedIn ? <IconWrap> <StyledLink to="/login">Login</StyledLink>  <StyledLink to="/register">Register</StyledLink> </IconWrap> : null }
            {isAdmin ?  <Link to="/dashboard"><IconWrap><FontAwesomeIcon icon={faUserCog} size="lg"/> </IconWrap> </Link>  : null }
           {isLoggedIn ?    <Link to="/" onClick={() => {localStorage.clear();}}><IconWrap><FontAwesomeIcon icon={faSignOutAlt} size="lg"/></IconWrap></Link> : null}
            </NavWrap>
</div>
        )} 
    
  
    export default Header;