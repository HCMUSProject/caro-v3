import { connect } from 'react-redux';
import Game from '../components/Game';
import { setHistoryStep, setNextTurn, addHistoryItem, setWinner } from '../actions';

const mapStateToProps = state => ({
  board: state.board,
  xIsNext: state.xIsNext,
  winner: state.winner,
  history: state.history
})


const mapDispatchToProps = dispatch => ({
  setStep: step => dispatch(setHistoryStep(step)),
  setNextTurn: () => dispatch(setNextTurn()),
  addHistoryItem: historyItem => dispatch(addHistoryItem(historyItem)),
  setWinner: winner => dispatch(setWinner(winner))
})

const GameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);

export default GameContainer;
