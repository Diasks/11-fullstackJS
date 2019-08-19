import React, { Component } from 'react';
import { Wrapper,
    InsideBox,
    ObjectFrame } from './Api';
import styled from 'styled-components';

 const BigTitle = styled.h1`
 text-align: center;
 width: 100%;
 margin: 20px;`;
  
 const Paragraph = styled.p`
 text-align: center;
 width: 100%;`;
  

class Startpage  extends Component {
    state = {  }
    render() { 
        return ( 
            <div> 
              
                 <BigTitle>GAMEOVER</BigTitle>
               <Paragraph>Välkommen till Gameover! Din butik för spel!</Paragraph>
          <Wrapper>  <InsideBox> <ObjectFrame>GENRE</ObjectFrame> </InsideBox>  
            <InsideBox><ObjectFrame>CONSOLE</ObjectFrame> </InsideBox></Wrapper>

            </div>
         );
    }
}
 
export default Startpage;