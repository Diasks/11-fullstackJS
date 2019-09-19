import React, { Fragment } from 'react'
import GameItem from './GameItem';
import styled from 'styled-components';
import {FooterWrap, Copyright} from '../layout/Footer';

export const GameWrapper = styled.div`
width: 100%;
height: auto;
display: flex;
flex-direction: row;
justify-content: center;
flex-flow: wrap;
`;

const MyNewFooterWrap = styled(FooterWrap)`
margin-top: 28%;
@media (min-width: 414px) {
    margin-top: 15%;
    }
    @media (min-width: 615px) {
        margin-top: 12%;
        }
        @media (min-width: 850px) {
            margin-top: 8%;
            }
            @media (min-width: 1280px) {
                margin-top: 32%;
                }
`;


const StyledHeaderThree = styled.h3`
text-align: center;
font-size: 0.8em;
color: #222;
font-weight: lighter;
`;

const Games = ({games}) => {
    return (
    <Fragment> 
        <GameWrapper>
            {games === '' ? <StyledHeaderThree>sorry we dont have this game, try a new search! <span role="img" aria-label="emojigrin">😬</span></StyledHeaderThree> : games.map(game => (
                  <GameItem key={game.id} game={game} />
              ))}  
        </GameWrapper>
<MyNewFooterWrap>  <Copyright>© GAMEOVER 2019</Copyright></MyNewFooterWrap>
     </Fragment>
    )
}

export default Games
