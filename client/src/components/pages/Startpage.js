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
  

const Startpage = () =>  {
  
   
        return ( 
            <div> 
             
                 <BigTitle>GAMEOVER</BigTitle>
                 <Link to="/login">Login</Link> <Link to="/register">Register</Link>
               <Paragraph>Välkommen till Gameover! Din butik för spel!
           
               </Paragraph>
               TODO: SÖK HÄÄÄÄÄÄÄÄR
               
  

            </div>
         );
    }

 
export default Startpage;