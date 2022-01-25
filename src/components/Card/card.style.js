import styled from 'styled-components';

export const Wrapper = styled.article`
  width: 340px;
  height: 340px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border: 0.5px solid #fff;
  border-radius: 5px;
  cursor: pointer;

  div {
    overflow: hidden;

    img {
      background-size: contain;
      width: 100%;
      height: auto;
      transition: all ease 0.3s;
    }
  }

  h5 {
    color: #000;
    text-align: center;
    background-color: #fff;
  }

  :hover img {
    transform: scale(1.03);
    opacity: 0.8;
  }
`;
