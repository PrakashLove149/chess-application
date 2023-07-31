import React from 'react';

const Queen = ({ color }) => {
  // Helper function to get the valid moves for the queen
  const getValidMoves = (row, col) => {
    const validMoves = [];

    // Horizontal and Vertical moves
    for (let c = 0; c < 8; c++) {
      if (c !== col) {
        validMoves.push([row, c]);
      }
    }
    for (let r = 0; r < 8; r++) {
      if (r !== row) {
        validMoves.push([r, col]);
      }
    }

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
      {/* Queen piece representation */}
      <span role="img" aria-label="queen">
        {color === 'white' ? '♕' : '♛'}
      </span>
    </div>
  );
};

export default Queen;
