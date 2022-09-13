import { REMOVE_SQUARES, SQUARES_ADD } from '../constants/actions';

function Square(state, action) {
  let newState = [...state];

  switch (action.type) {
    case SQUARES_ADD:
      newState.push('');
      break;
    case REMOVE_SQUARES:
      newState.shift();
      break;
    default:
  }
  return newState;
}

export default Square;
