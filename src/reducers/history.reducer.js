import { ADD_HISTORY_ITEM, SET_STEP } from '../actions'

const initialState = {
  list: [{
    board: new Array(20).fill(null)
      .map(() => new Array(20).fill(null))
  }],
  step: 0,
}

function history(state = initialState, action) {
  switch (action.type) {
    case ADD_HISTORY_ITEM:
      // them history tai vi tri step
      return {
        ...state, list: state.list.slice(0, state.step + 1)
          .concat([action.historyItem])
      };
    case SET_STEP:
      return { ...state, step: action.step };
    default:
      return state;
  }
}

export default history;
