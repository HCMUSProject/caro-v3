import { combineReducers } from 'redux';
import board from './board.reducer';
import turn from './turn.reducer';
import winner from './winner.reducer';

export default combineReducers({
  board,
  xIsNext: turn,
  winner
})
