import React, {Fragment} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGhost } from '@fortawesome/free-solid-svg-icons'

const WrapGhost = styled.div`
text-align: center;
color: #b4b7ba;
:hover {
    color: black;
  }
`;

 const BigTitle = styled.h1`
 text-align: center;
 width: 100%;
 margin: 10px;
 `;
  
  const Paragraph = styled.p`
 text-align: center;
 width: 100%;
 font-size: 0.8em;
margin-bottom: 0.25em;
color: #222;
font-weight: lighter;
`;
  

const Startpage = () =>  {
        return ( 
            <Fragment> 
                 <BigTitle>GAMEOVER</BigTitle>
                <WrapGhost>  <FontAwesomeIcon icon={faGhost} size="5x"/> </WrapGhost>
                 
               <Paragraph>The online store game choice</Paragraph>
            </Fragment>
         );
    }

 
export default Startpage;