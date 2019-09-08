import React from 'react';
    import { Link } from 'react-router-dom';
import styled from 'styled-components';

 const BigTitle = styled.h1`
 text-align: center;
 width: 100%;
 margin: 20px;`;
  
 const Paragraph = styled.p`
 text-align: center;
 width: 100%;`;
  

const Startpage = ({isLoggedIn}) =>  {

   
        return ( 
            <div> 
             
                 <BigTitle>GAMEOVER</BigTitle>
                 {!isLoggedIn ? <div> <Link to="/login">Login</Link> <Link to="/register">Register</Link> </div> : null }
                 
               <Paragraph>Välkommen till Gameover! Din butik för spel!
           
               </Paragraph>
               TODO: SÖK HÄÄÄÄÄÄÄÄR
               
  

            </div>
         );
    }

 
export default Startpage;