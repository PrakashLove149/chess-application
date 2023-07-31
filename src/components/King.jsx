import React from 'react';

const King = ({ color }) => {
  // Helper function to get the valid moves for the king
  const getValidMoves = (row, col) => {
    const validMoves = [];

    const moves = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1],
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
      {/* King piece representation */}
      <span role="img" aria-label="king">
        {color === 'white' ? '♔' : '♚'}
      </span>
    </div>
  );
};

export default King;
