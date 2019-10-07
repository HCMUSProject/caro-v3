export const SET_TURN_X = 'SET_TURN_X';
export const SET_BOARD = 'SET_BOARD';
export const SET_WINNER = 'SET_WINNER';

export function setTurnX(xIsNext) {
  return { type: SET_TURN_X, xIsNext };
}

export function setBoard(board) {
  return { type: SET_BOARD, board }
}

export function setWinner(winner) {
  return { type: SET_WINNER, winner };
}
