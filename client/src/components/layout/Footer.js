import React from 'react';
import styled from 'styled-components';

export const FooterWrap = styled.div`
display: flex;
flex-direction: column;
height: 50px;
width: 100%
background-color: #484848;
box-shadow: 0px 10px 50px #555;
align-items: center;
color: #B0B0B0;
position: sticky;
padding-top: 20px;
padding-bottom: 6px;
box-shadow: 0px 10px 50px #555;  
`;

export const Copyright = styled.span`
  align-self: center;
  font-size: 10px;
`;

const Footer = () => {
  return (
    <FooterWrap>
      <Copyright>© GAMEOVER 2019</Copyright>
    </FooterWrap>
  );
};
export default Footer;
