import {
  ADD_FIVE,
  ADD_ONE,
  ADD_TWO,
  BORDER_KEY,
  COLOR_RAND,
  FONT_RAND,
  REMOVE_FIVE,
  REMOVE_ONE,
  REMOVE_TWO,
} from '../constants/actions';

import randColor from '../functions/randColor';

import rand from '../functions/rand';

function count(state, action) {
  let newState = { ...state };

  switch (action.type) {
    case ADD_ONE:
      newState.number++;
      break;
    case ADD_TWO:
      newState.number += 2;
      break;
    case REMOVE_ONE:
      newState.number--;
      break;
    case REMOVE_TWO:
      newState.number -= 2;
      break;

    case ADD_FIVE:
      newState.number += 5;
      break;
    case REMOVE_FIVE:
      newState.number -= 5;
      break;
    case COLOR_RAND:
      newState.color = randColor();
      break;
    case FONT_RAND:
      newState.font = rand(10, 40);
      break;

    case BORDER_KEY:
      newState.border = !newState.border;
      break;

    default:
  }

  return newState;
}

export default count;
