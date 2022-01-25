import React from 'react';
import { Wrapper, Content } from './card.style';

const Card = ({ name, image, handleAlreadyClickedChars }) => {
  return (
    <Wrapper>
      <Content onClick={handleAlreadyClickedChars} urlImg={image}>
        <h5>{name}</h5>
      </Content>
    </Wrapper>
  );
};

export default Card;
