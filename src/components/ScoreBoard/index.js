import React from 'react';
import { Wrapper, Content } from './scoreboard.style';

const ScoreBoard = ({ currentScore, bestScore }) => {
  return (
    <Wrapper>
      <Content>
        <span>Score: {currentScore}</span>
        <span>Best Score: {bestScore}</span>
      </Content>
    </Wrapper>
  );
};

export default ScoreBoard;
