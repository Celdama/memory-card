import React from 'react';
import { Wrapper, Content } from './card.style';

const Card = ({ name, image, handleCurrentChars }) => {
  return (
    <Wrapper>
      <Content onClick={handleCurrentChars} urlImg={image}>
        <h5>{name}</h5>
      </Content>
    </Wrapper>
  );
};

export default Card;
