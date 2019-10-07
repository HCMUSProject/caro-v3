import React from 'react';
import { Card, Button } from 'semantic-ui-react';
import Board from './Board';


const Game = ({ board, xIsNext, winner, X, O }) => {

  const player = xIsNext ? X : O;

  const showPlayer = () => {
    if (winner) {
      return (
        <>
          Winner: &nbsp;
          <span className={`player${` ${winner}`}`}>{winner}</span>
        </>
      );
    }

    return (
      <>
        Player: &nbsp;
        <span className={`player${` ${player}`}`}>{player}</span>
      </>
    );
  };

  const handleClick = (row, col) => {

  }
  return (
    <div className='game-wrapper'>
      <Card className='game-info'>
        <Card.Content>
          <Card.Header as='h1'>Caro Vietnam - v2</Card.Header>
          <Card.Description>
            <p>{showPlayer()}</p>

            {/* <Button size='small' onClick={this.toggleConfirm}>
              Reset game
              </Button> */}
          </Card.Description>
        </Card.Content>
      </Card>

      <Board
        // points={points}
        board={board}
        xIsNext={xIsNext}
        onClick={handleClick}
        winner={winner}
      />
      {/*
      <History
        history={history}
        sort={sortASC}
        toggleSort={this.toggleSort}
        jumpTo={this.jumpTo}
        selected={stepNumber}
      />

      <Confirm
        open={open}
        size='mini'
        header='Reset game'
        content='Do you want to reset this game?'
        onCancel={this.toggleConfirm}
        onConfirm={this.resetGame} */}
      {/* /> */}
    </div>
  );
};

Game.defaultProps = {
  size: 20,
  numToWin: 5,
  X: 'X',
  O: 'O',
  DRAW: 'XO',
};

export default Game;
