import { combineReducers } from 'redux';
import turn from './turn.reducer';
import winner from './winner.reducer';
import history from './history.reducer';

export default combineReducers({
  xIsNext: turn,
  winner,
  history,
});
