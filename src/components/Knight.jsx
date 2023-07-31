import React from 'react';

const Knight = ({ color }) => {
  // Helper function to get the valid moves for the knight
  const getValidMoves = (row, col) => {
    const validMoves = [];

    const moves = [
      [-2, -1],
      [-2, 1],
      [-1, -2],
      [-1, 2],
      [1, -2],
      [1, 2],
      [2, -1],
      [2, 1],
    ];

    for (const move of moves) {
      const [dx, dy] = move;
      const newRow = row + dx;
      const newCol = col + dy;

      if (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8) {
        validMoves.push([newRow, newCol]);
      }
    }

    return validMoves;
  };

  return (
    <div>
      {/* Knight piece representation */}
      <span role="img" aria-label="knight">
        {color === 'white' ? '♘' : '♞'}
      </span>
    </div>
  );
};

export default Knight;
