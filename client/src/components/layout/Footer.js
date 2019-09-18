import React from "react";
import styled from 'styled-components';

const FooterWrap = styled.div`
background-color: #cecdcd;
color: white;
display: flex;
flex-direction: column;
height: 200px;

border: 1px solid red;
  text-align: center;

  
`;

const Copyright = styled.span`
  align-self: center;
  font-size: 10px;
`;


const Footer =  () => {
        return (
            <FooterWrap> 
                      <Copyright>© GAMEOVER 2019</Copyright>
            </FooterWrap>
        )
    
}
    export default Footer;