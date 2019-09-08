import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGhost } from '@fortawesome/free-solid-svg-icons'

const WrapGhost = styled.div`
text-align: center;
:hover {
    color: red;

  }


`;

 const BigTitle = styled.h1`
 text-align: center;
 width: 100%;
 margin: 20px;`;
  
 const Paragraph = styled.p`
 text-align: center;
 width: 100%;`;
  

const Startpage = () =>  {

   
        return ( 
            <div> 
             
                 <BigTitle>GAMEOVER</BigTitle>
                <WrapGhost>  <FontAwesomeIcon icon={faGhost} size="5x"/> </WrapGhost>
                 
               <Paragraph>Welcome to Gameover! Your store for games!</Paragraph>
              

  

            </div>
         );
    }

 
export default Startpage;