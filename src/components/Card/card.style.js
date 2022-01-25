import styled from 'styled-components';

export const Wrapper = styled.article`
  border: 0.5px solid #fff;
  border-radius: 5px;
`;

export const Content = styled.div`
  width: 340px;
  height: 340px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  cursor: pointer;

  :hover img {
    transform: scale(1.03);
    opacity: 1;
  }
`;

export const ImgContainer = styled.div`
  overflow: hidden;
`;

export const Img = styled.img`
  background-size: contain;
  width: 100%;
  height: auto;
  transition: all ease 0.3s;
  opacity: 0.8;
`;

export const Name = styled.h5`
  color: #000;
  text-align: center;
  background-color: #fff;
`;
