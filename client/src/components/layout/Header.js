import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faShoppingCart,
  faHome,
  faUserCog,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const NavWrap = styled.div`
width: 100%
display: flex;
background-color: #484848;
box-shadow: 0px 10px 50px #555;
`;

const IconWrap = styled.div`
  padding: 6px;
  margin: 3px;
  color: #b0b0b0;
  :hover {
    color: #f5f5f5;
  }
`;

export const StyledLink = styled(Link)`
  color: #b0b0b0;
  text-decoration: none;
  &:hover {
    color: #f5f5f5;
  }
  &:focus,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const Header = ({ isLoggedIn, isAdmin, logoutUser }) => {
  return (
    <NavWrap>
      <Link to='/'>
        
        <IconWrap>
          <FontAwesomeIcon icon={faHome} size='lg' />
        </IconWrap>
      </Link>
      <Link to='/profile'>
        
        <IconWrap>
          <FontAwesomeIcon icon={faUser} size='lg' />
        </IconWrap>
      </Link>
      <Link to='/cart'>
        
        <IconWrap>
          <FontAwesomeIcon icon={faShoppingCart} size='lg' />
        </IconWrap>
      </Link>
      {!isLoggedIn ? (
        <IconWrap>
          
          <StyledLink to='/login'>Login</StyledLink> {' '}
          <StyledLink to='/register'>Register</StyledLink>
        </IconWrap>
      ) : null}
      {isAdmin ? (
        <Link to='/dashboard'>
          <IconWrap>
            <FontAwesomeIcon icon={faUserCog} size='lg' />
          </IconWrap>
        </Link>
      ) : null}
      {isLoggedIn ? (
        <Link to='/login' onClick={logoutUser}>
          <IconWrap>
            <FontAwesomeIcon icon={faSignOutAlt} size='lg' />
          </IconWrap>
        </Link>
      ) : null}
    </NavWrap>
  );
};

export default Header;
