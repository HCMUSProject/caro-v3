import { connect } from 'react-redux';
import Game from '../components/Game';

const mapStateToProps = state => {
  return {
    board: state.board,
    xIsNext: state.xIsNext,
    winner: state.winner
  }
}

const GameContainer = connect(
  mapStateToProps
)(Game);

export default GameContainer;
