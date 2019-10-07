import React from 'react';
import Cell from './Cell';

const Board = ({ board, size, onClick, winner }) => {
  const renderBoard = () => {
    return board.map((row, iRow) => {
      return (
        // eslint-disable-next-line react/no-array-index-key
        <div key={iRow} className='board-row'>
          {row.map((cell, iCol) => {
            return (
              <Cell
                // eslint-disable-next-line react/no-array-index-key
                key={iRow * size + iCol}
                row={iRow}
                col={iCol}
                val={cell}
                // eslint-disable-next-line no-shadow
                onClick={onClick}
                winner={winner}
              />
            );
          })}
        </div>
      );
    });
  };
  return <div id='board'>{renderBoard()}</div>;
};

Board.defaultProps = {
  size: 20,
  numToWin: 5,
};

export default Board;
