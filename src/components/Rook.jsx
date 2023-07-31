import React from 'react';

const Rook = ({ color }) => {
  // Helper function to get the valid moves for the rook
  const getValidMoves = (row, col) => {
    const validMoves = [];

    // Horizontal moves
    for (let c = 0; c < 8; c++) {
      if (c !== col) {
        validMoves.push([row, c]);
      }
    }

    // Vertical moves
    for (let r = 0; r < 8; r++) {
      if (r !== row) {
        validMoves.push([r, col]);
      }
    }

    return validMoves;
  };

  return (
    <div>
      {/* Rook piece representation */}
      <span role="img" aria-label="rook">
        {color === 'white' ? '♖' : '♜'}
      </span>
    </div>
  );
};

export default Rook;
