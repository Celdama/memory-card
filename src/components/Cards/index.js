import React from 'react';
import { Wrapper } from './cards.style';

const Cards = ({ loadedChars }) => {
  if (loadedChars) {
    loadedChars.map((char) => console.log(char.name));
  }
  return <Wrapper>Cards Game</Wrapper>;
};

export default Cards;
