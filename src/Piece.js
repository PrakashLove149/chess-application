import React from 'react';
import Pawn from './Pawn';
import Rook from '/Rook';
import Knight from './Knight';
import Bishop from './Bishop';
import Queen from './Queen';
import King from './King';

const Piece = ({ type }) => {
  switch (type.toLowerCase()) {
    case 'p':
      return <Pawn />;
    case 'r':
      return <Rook />;
    case 'n':
      return <Knight />;
    case 'b':
      return <Bishop />;
    case 'q':
      return <Queen />;
    case 'k':
      return <King />;
    default:
      return null;
  }
};

export default Piece;
