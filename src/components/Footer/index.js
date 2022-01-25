import React from 'react';
import { Wrapper, Content } from './footer.style';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Wrapper>
      <Content>
        <p>
          Copyright &copy;<span>{currentYear}</span>{' '}
          <a target='_blank' href='https://github.com/Celdama' rel='noreferrer'>
            Celdama <i className='fab fa-github'></i>
          </a>
        </p>
      </Content>
    </Wrapper>
  );
};

export default Footer;
