import styled from 'styled-components';

export const Wrapper = styled.article`
  width: 340px;
  height: 340px;
`;

export const Content = styled.div`
  background-image: ${({ urlImg }) => (urlImg ? `url(${urlImg})` : '')};
  background-size: cover;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  border: 0.5px solid #fff;
  border-radius: 5px;
  cursor: pointer;
  transition: all ease-in-out 0.3s;
  :hover {
    opacity: 0.8;
  }

  h5 {
    background-color: #fff;
    text-align: center;
  }
`;
