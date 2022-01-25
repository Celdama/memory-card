import React from 'react';
import { Wrapper } from './card.style';

const Card = ({ name, image, handleAlreadyClickedChars }) => {
  return (
    // <Wrapper>
    //   <Content onClick={handleAlreadyClickedChars} urlImg={image}>
    //     <h5>{name}</h5>
    //   </Content>
    // </Wrapper>

    <Wrapper>
      <div className='img-container'>
        <img src={image} alt='' />
      </div>
      <h5>{name}</h5>
    </Wrapper>
  );
};

export default Card;
