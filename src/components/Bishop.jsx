import React from 'react';

const Bishop = ({ color }) => {
  // Helper function to get the valid moves for the bishop
  const getValidMoves = (row, col) => {
    const validMoves = [];

    // Diagonal moves
    for (let i = 1; i < 8; i++) {
      validMoves.push([row + i, col + i]);
      validMoves.push([row + i, col - i]);
      validMoves.push([row - i, col + i]);
      validMoves.push([row - i, col - i]);
    }

    return validMoves;
  };

  return (
    <div>
      {/* Bishop piece representation */}
      <span role="img" aria-label="bishop">
        {color === 'white' ? '♗' : '♝'}
      </span>
    </div>
  );
};

export default Bishop;
