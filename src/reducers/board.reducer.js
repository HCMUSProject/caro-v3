import { SET_BOARD } from '../actions';

const initialState = new Array(20).fill(null)
  .map(() => new Array(20).fill(null));

function board(state = initialState, action) {
  switch (action.type) {
    case SET_BOARD:
      return state.map(el => {
        return el.map(val => val);
      })
    default:
      return state;
  }
}

export default board;
