import React, { useState } from 'react';
import Square from './Square';


const Chessboard = () => {
  const boardSize = 8; // 8x8 chessboard

  // const initialBoardState = [
  //   ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
  //   ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
  //   ['', '', '', '', '', '', '', ''],
  //   ['', '', '', '', '', '', '', ''],
  //   ['', '', '', '', '', '', '', ''],
  //   ['', '', '', '', '', '', '', ''],
  //   ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
  //   ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
  // ];

  const [boardState, setBoardState] = useState(initialBoardState);
 
  const handleMove = (fromRow, fromCol, toRow, toCol) => {
    // Implement move validation and updating boardState here
  };

  // Helper function to create the squares of the chessboard
  const renderSquares = () => {


    const squares = [];
    for (let row = 0; row < boardSize; row++) {
      for (let col = 0; col < boardSize; col++) {
        const squareColor = (row + col) % 2 === 0 ? 'white' : 'black';
        const piece = boardState[row][col];
        squares.push(<Square key={`${row}-${col}`} color={squareColor} piece={piece}
        row={row}
        col={col}
        handleMove={handleMove} />);
      }
    }
     return squares;
  };

  return (
    <>
  <div className="chessboard">{renderSquares()}
 
    </div>
  </>
  )
};

export default Chessboard;
