import React from 'react';

const ScoreBoard = ({ currentScore, bestScore }) => {
  return (
    <div>
      <span>current: {currentScore} </span>
      <span>best score: {bestScore}</span>
    </div>
  );
};

export default ScoreBoard;
