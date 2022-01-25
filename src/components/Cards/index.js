import React from 'react';
import Card from '../Card';
import { Wrapper, Content } from './cards.style';

const Cards = ({ loadedChars }) => {
  let content = null;

  if (loadedChars) {
    content = loadedChars.map((char) => (
      <Card key={char.id} name={char.name} image={char.image} />
    ));
  }
  return (
    <Wrapper>
      <Content>{content}</Content>
    </Wrapper>
  );
};

export default Cards;
