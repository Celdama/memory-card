import React from 'react';
import { Wrapper, Content } from './card.style';

const Card = ({ name, image }) => {
  return (
    <Wrapper>
      <Content urlImg={image}>
        <h5>{name}</h5>
      </Content>
    </Wrapper>
  );
};

export default Card;
