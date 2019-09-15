import React, { Component } from "react";
import styled from 'styled-components';

const FooterWrap = styled.div`
width: 100%
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
background-color: lightgrey;
padding-top: 10px;
padding-bottom: 10px;
border-top: 1px solid black;
position: fixed; left: 0; bottom: 0;
`;


const Copyright = styled.span`
  align-self: center;
  font-size: 10px;
`;

const FooterInsideBox = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextTitle = styled.span`
  text-transform: uppercase;
  font-size: 10px;
`;


class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
              }
        };
        
   
    render() 
    {
        return (
            <FooterWrap> 
                <FooterInsideBox>
        <TextBox>
          <TextTitle>Company</TextTitle>
            About Us
        </TextBox>
        <TextBox>
          <TextTitle>Information</TextTitle>
            Orders
        </TextBox>
        <TextBox>
          <TextTitle>Support</TextTitle>
            Contact Us
        </TextBox>
      </FooterInsideBox>
                      <Copyright>© GAMEOVER 2019</Copyright>
            </FooterWrap>
        )
    }
}
    
    export default Footer;