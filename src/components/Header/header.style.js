import styled from 'styled-components';

export const Wrapper = styled.nav`
  display: flex;
  justify-content: center;
  background-color: var(--black);
  color: var(--white);
`;

export const Content = styled.div`
  color: var(--orange);

  h1 {
    font-size: var(--medFont);
    font-weight: normal;
    text-align: center;
  }
`;

export const Logo = styled.img`
  width: 160px;
  height: auto;
`;
