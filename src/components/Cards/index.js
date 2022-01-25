import React from 'react';
import Card from '../Card';
import { Wrapper, Content } from './cards.style';

const Cards = ({ loadedChars, handleAlreadyClickedChars }) => {
  const content = loadedChars.map(({ id, name, image }) => (
    <Card
      key={id}
      name={name}
      image={image}
      handleAlreadyClickedChars={() => handleAlreadyClickedChars(id)}
    />
  ));

  return (
    <Wrapper>
      <Content>{content}</Content>
    </Wrapper>
  );
};

export default Cards;
