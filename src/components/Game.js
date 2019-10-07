import React from 'react';
import { Card, Button } from 'semantic-ui-react';
import Board from './Board';


const Game = ({ xIsNext, winner, history, setStep, setNextTurn, addHistoryItem, setWinner, size = 20, numToWin = 5 }) => {


  const boardDisplay = [...history.list[history.step].board];

  const checkingHorizontal = (board, row, col) => {
    const points = [];

    let isBlockOutAbove = false;
    let isBlockOutBelow = false;

    const curPlayer = board[row][col];

    // count = 1 la vi tri hien tai.
    let count = 1;
    points.push({ row, col });

    // dem ve 2 ben
    for (let i = col - 1; i >= 0; i -= 1) {
      if (board[row][i] === curPlayer) {
        count += 1;
        points.push({ row, col: i });
      } else {
        if (board[row][i] !== null) {
          isBlockOutAbove = true;
        }
        break;
      }
    }
    for (let i = col + 1; i < size; i += 1) {
      if (board[row][i] === curPlayer) {
        count += 1;
        points.push({ row, col: i });
      } else {
        if (board[row][i] !== null) {
          isBlockOutBelow = true;
        }
        break;
      }
    }

    if (count >= numToWin) {
      if (count > numToWin) {
        return {
          hasWinner: true,
          points,
        };
      }
      return {
        hasWinner: !(isBlockOutAbove && isBlockOutBelow),
        points: !(isBlockOutAbove && isBlockOutBelow) ? points : [],
      };
    }
    return {
      hasWinner: false,
      points: [],
    };
  };

  const checkingVertical = (board, row, col) => {
    const points = [];
    let isBlockOutAbove = false;
    let isBlockOutBelow = false;

    const curPlayer = board[row][col];

    // count = 1 la vi tri hien tai.
    let count = 1;
    points.push({ row, col });

    // dem ve 2 ben
    for (let i = row - 1; i >= 0; i -= 1) {
      if (board[i][col] === curPlayer) {
        count += 1;
        points.push({ row: i, col });
      } else {
        if (board[i][col] !== null) {
          isBlockOutAbove = true;
        }
        break;
      }
    }
    for (let i = row + 1; i < size; i += 1) {
      if (board[i][col] === curPlayer) {
        count += 1;
        points.push({ row: i, col });
      } else {
        if (board[i][col] !== null) {
          isBlockOutBelow = true;
        }
        break;
      }
    }

    if (count >= numToWin) {
      if (count > numToWin) {
        return {
          hasWinner: true,
          points,
        };
      }
      return {
        hasWinner: !(isBlockOutAbove && isBlockOutBelow),
        points: !(isBlockOutAbove && isBlockOutBelow) ? points : [],
      };
    }
    return {
      hasWinner: false,
      points: [],
    };
  };

  const checkingMainDiagonal = (board, row, col) => {
    const points = [];

    let isBlockOutAbove = false;
    let isBlockOutBelow = false;

    const curPlayer = board[row][col];
    // count = 1 la vi tri hien tai.
    let count = 1;
    points.push({ row, col });

    // dem ve 2 ben
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i -= 1, j -= 1) {
      if (board[i][j] === curPlayer) {
        count += 1;
        points.push({ row: i, col: j });
      } else {
        if (board[i][j] !== null) {
          isBlockOutAbove = true;
        }
        break;
      }
    }

    for (let i = row + 1, j = col + 1; i < size && j < size; i += 1, j += 1) {
      if (board[i][j] === curPlayer) {
        count += 1;
        points.push({ row: i, col: j });
      } else {
        if (board[i][j] !== null) {
          isBlockOutBelow = true;
        }
        break;
      }
    }

    if (count >= numToWin) {
      if (count > numToWin) {
        return {
          hasWinner: true,
          points,
        };
      }
      return {
        hasWinner: !(isBlockOutAbove && isBlockOutBelow),
        points: !(isBlockOutAbove && isBlockOutBelow) ? points : [],
      };
    }
    return {
      hasWinner: false,
      points: [],
    };
  };

  const checkingSubDiagonal = (board, row, col) => {
    const points = [];

    let isBlockOutAbove = false;
    let isBlockOutBelow = false;

    const curPlayer = board[row][col];
    // count = 1 la vi tri hien tai.
    let count = 1;
    points.push({ row, col });

    // dem ve 2 ben
    for (let i = row - 1, j = col + 1; i >= 0 && j < size; i -= 1, j += 1) {
      if (board[i][j] === curPlayer) {
        count += 1;
        points.push({ row: i, col: j });
      } else {
        if (board[i][j] !== null) {
          isBlockOutAbove = true;
        }
        break;
      }
    }

    for (let i = row + 1, j = col - 1; i < size && j >= 0; i += 1, j -= 1) {
      if (board[i][j] === curPlayer) {
        count += 1;
        points.push({ row: i, col: j });
      } else {
        if (board[i][j] !== null) {
          isBlockOutBelow = true;
        }
        break;
      }
    }

    if (count >= numToWin) {
      if (count > numToWin) {
        return {
          hasWinner: true,
          points,
        };
      }
      return {
        hasWinner: !(isBlockOutAbove && isBlockOutBelow),
        points: !(isBlockOutAbove && isBlockOutBelow) ? points : [],
      };
    }
    return {
      hasWinner: false,
      points: [],
    };
  };

  const isTerminated = (board, row, col) => {
    const retH = checkingHorizontal(board, row, col);
    const retV = checkingVertical(board, row, col);
    const retM = checkingMainDiagonal(board, row, col);
    const retS = checkingSubDiagonal(board, row, col);

    const desPoints = retH.points.concat(retV.points, retM.points, retS.points);

    for (let i = 0; i < desPoints.length - 1; i += 1) {
      for (let j = i + 1; j < desPoints.length; j += 1) {
        if (
          desPoints[i].row === desPoints[j].row &&
          desPoints[i].col === desPoints[j].col
        ) {
          desPoints.splice(i, 1);
        }
      }
    }

    const ret = {
      hasWinner:
        retH.hasWinner || retV.hasWinner || retM.hasWinner || retS.hasWinner,
      points: desPoints,
    };
    return ret;
  };

  const isFull = board => {
    return board.every(row => {
      return row.every(cell => cell);
    });
  };

  const showPlayer = () => {
    let strPlayer = '';
    let status = '';
    if (winner !== null) {
      strPlayer = winner === 1 ? 'X' : 'O';
      status = 'Winner'
    } else {
      status = 'Player'
      if (isFull(boardDisplay)) {
        strPlayer = 'DRAW';
      } else {
        strPlayer = xIsNext ? 'X' : 'O';
      }
    }

    return (
      <>
        {status}: &nbsp;
        <span className={`player${` ${strPlayer}`}`}>{strPlayer}</span>
      </>
    );
  };

  const handleClick = (row, col) => {
    // đọc lịch sử
    const { list, step } = history;
    const currentHistory = list.slice(0, step + 1);

    // clone 2d array
    const currentBoard = currentHistory[currentHistory.length - 1].board.map(arr => [...arr]);

    const player = xIsNext ? 1 : 0;
    if (winner !== null || currentBoard[row][col] !== null) return;
    currentBoard[row][col] = player;
    const result = isTerminated(currentBoard, row, col);


    addHistoryItem({
      board: currentBoard,
      lastPosition: { row, col },
      winner: result.hasWinner ? player : null
    });

    setNextTurn();
    setStep(currentHistory.length);
    setWinner(result.hasWinner ? player : null);
  }

  const jumpTo = newStep => {
    setStep(newStep);
    setNextTurn();
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
        board={boardDisplay}
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

export default Game;
