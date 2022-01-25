import React from 'react';
import { Wrapper, ImgContainer, Content, Img, Name } from './card.style';

const Card = ({ name, image, handleAlreadyClickedChars }) => {
  return (
    <Wrapper onClick={handleAlreadyClickedChars}>
      <Content>
        <ImgContainer>
          <Img src={image} alt={name} />
        </ImgContainer>
        <Name>{name}</Name>
      </Content>
    </Wrapper>
  );
};

export default Card;
