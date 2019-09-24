import React, { Component, Fragment } from 'react';
import { GameWrapper } from './Games';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faCartPlus,
  faDollarSign
} from '@fortawesome/free-solid-svg-icons';
import { SearchTitle } from './Search';

export const ButtonDiv = styled.div`
  text-align: center;
`;

const StyledLink = styled(Link)`
  color: #b0b0b0;
  margin-bottom: 10px;
  text-decoration: none;
  &:hover {
    color: #f5f5f5;
  }
  &:focus,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const AddToCartButton = styled.button`
  width: 50%;
  color: black;
  background-color: #f5f5f5;
  margin: 5px;
  padding: 5px;
  border-radius: 5px;
  :hover {
    background-color: #b0b0b0;
    color: #fff;
    border: 1px solid #fff;
  }
`;

const Headline = styled.h1`
  color: #111;
  font-weight: lighter;
`;

const Paragraph = styled.p`
  font-size: 0.8em;
  margin-bottom: 0.25em;
  color: #222;
  font-weight: lighter;
`;

const GameFrame = styled.div`
  width: 100%;
  height: auto;
  flex-direction: column;
  box-sizing: border-box;
  box-shadow: 0px 10px 30px #555;
  display: flex;
`;

const FrameList = styled.ul`
  width: 50%;
  padding: 0;
  font-size: 0.8em;
  color: #222;
  font-weight: lighter;
`;

const RatingStar = styled.span`
  color: #daa520;
`;

const ListGenre = styled.li`
  list-style-type: square;
`;

export class Game extends Component {
  componentDidMount() {
    this.props.getGame(this.props.match.params.slug);
  }

  render() {
    if (
      this.props.game === undefined ||
      Object.keys(this.props.game).length === 0
    ) {
      return null;
    } else {
      const { addToCart, isLoggedIn, success } = this.props;
      const {
        name,
        rating,
        released,
        clip,
        genres,
        price
      } = this.props.game[0];

      return (
        <Fragment>
          {success ? <SearchTitle>game was added to cart!</SearchTitle> : null}
          <GameWrapper>
            <GameFrame>
              {clip ? (
                <video
                  controls
                  src={clip.clip}
                  type='video/mp4'
                  height='200'
                ></video>
              ) : (
                <h4>no video available!</h4>
              )}
              <Headline>{name}</Headline>
              <Paragraph>
                <RatingStar>
                  <FontAwesomeIcon icon={faStar} size='lg' />
                </RatingStar>
                {rating}
              </Paragraph>
              <Paragraph>Releasedate: {released} </Paragraph>
              <FrameList>
                Genre:
                {genres.map((genre, i) => (
                  <ListGenre key={i}>{genre.name}</ListGenre>
                ))}
              </FrameList>
              <Paragraph>
                <FontAwesomeIcon
                  icon={faDollarSign}
                  size='lg'
                ></FontAwesomeIcon>
                {price}
              </Paragraph>
              {isLoggedIn ? (
                <ButtonDiv>
                  <AddToCartButton
                    onClick={() => {
                      addToCart(this.props.game[0]);
                    }}
                  >
                    <FontAwesomeIcon icon={faCartPlus} size='lg' />
                    add to cart
                  </AddToCartButton>
                </ButtonDiv>
              ) : null}
              <StyledLink to='/' className='btn btn-light'>
                Go Back
              </StyledLink>
            </GameFrame>
          </GameWrapper>
        </Fragment>
      );
    }
  }
}

export default Game;
