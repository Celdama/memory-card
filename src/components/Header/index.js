import React from 'react';
import { Wrapper, Content, Logo } from './header.style';
import StarWarsIcon from '../../images/starwars.png';

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <Logo src={StarWarsIcon} alt='Star Wars Icon' />
        <h1>Memory Game</h1>
      </Content>
    </Wrapper>
  );
};

export default Header;
