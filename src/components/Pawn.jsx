import React from 'react';

const Pawn = ({ color, isFirstMove }) => {
  // Helper function to get the valid moves for the pawn
  const getValidMoves = (row, col) => {
    const validMoves = [];
    const direction = color === 'white' ? -1 : 1;

    // Moving forward one square
    if (isFirstMove) {
      validMoves.push([row + direction * 2, col]);
    }
    validMoves.push([row + direction, col]);

    // Capturing diagonally
    validMoves.push([row + direction, col + 1]);
    validMoves.push([row + direction, col - 1]);

    return validMoves;
  };

  return (
    <div>
      {/* Pawn piece representation */}
      <span role="img" aria-label="pawn">
        {color === 'white' ? '♙' : '♟️'}
      </span>
    </div>
  );
};

export default Pawn;
