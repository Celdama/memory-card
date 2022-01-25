import React from 'react';
import Card from '../Card';
import { Wrapper, Content } from './cards.style';

const Cards = ({ loadedChars, handleAlreadyClickedChars }) => {
  let content = null;

  if (loadedChars) {
    content = loadedChars.map((char) => (
      <Card
        key={char.id}
        name={char.name}
        image={char.image}
        handleAlreadyClickedChars={() => handleAlreadyClickedChars(char.id)}
      />
    ));
  }
  return (
    <Wrapper>
      <Content>{content}</Content>
    </Wrapper>
  );
};

export default Cards;
