import { SET_NEXT_TURN } from '../actions';

function xIsNext(state = true, action) {
  switch (action.type) {
    case SET_NEXT_TURN:
      return !state;
    default:
      return state;
  }
}

export default xIsNext;
