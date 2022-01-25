import React from 'react';
import { Wrapper, Content } from './footer.style';

const Footer = () => {
  return (
    <Wrapper>
      <Content>
        <p>
          Copyright &copy;<span>{new Date().getFullYear()}</span>{' '}
          <a target='_blank' href='https://github.com/Celdama' rel='noreferrer'>
            Celdama <i class='fab fa-github'></i>
          </a>
        </p>
      </Content>
    </Wrapper>
  );
};

export default Footer;
