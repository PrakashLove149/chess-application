import React from 'react'

const Square = ({ color, piece  , row, col, handleMove}) => {
    const squareColor = (row + col) % 2 === 0 ? 'white' : 'black';

    const squareStyle = {
        width: '50px',
        height: '50px',
        backgroundColor: color,
        border: '1px solid #000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '24px',
      };


      const handleClick = () => {
        // Implement click handler to handle piece movements
        // handleMove(row, col, /* destination row */, /* destination col */);
      };


  return (
  <>
  <div className={`square ${squareColor}`} onClick={handleClick}>
  {/* <div style={squareStyle}> */}
      {piece && <span>{piece}</span>}
    </div>
    {/* </div> */}
    </>
 ) 
};

export default Square;
