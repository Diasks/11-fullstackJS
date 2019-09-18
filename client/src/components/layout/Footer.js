import React from "react";
import styled from 'styled-components';

const FooterWrap = styled.div`
width: 100%
display: flex;
background-color: #484848;
box-shadow: 0px 10px 50px #555;
align-items: center;
color: #B0B0B0;
padding-top: 6px;
padding-bottom: 6px;
position: absolute; 
left: 0; 
bottom: 0;
box-shadow: 0px 10px 50px #555;
height: 60px;
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