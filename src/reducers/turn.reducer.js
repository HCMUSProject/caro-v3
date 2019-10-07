import { SET_TURN_X } from '../actions';

function xIsNext(state = true, action) {
  switch (action.type) {
    case SET_TURN_X:
      return action.xIsNext;
    default:
      return state;
  }
}

export default xIsNext;
