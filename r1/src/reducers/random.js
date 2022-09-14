import {
  RAND_NUM,
  SORT_TEN,
  SORT_TEN_DESC,
  SORT_TEN_RESET,
} from '../constants/017Const';
import rand from '../functions/rand';

function ten(state, action) {
  let newState = [...state];

  switch (action.type) {
    case RAND_NUM:
      newState = [];
      [...Array(10)].forEach(() => {
        const number = rand(1, 9);
        newState.push({ number, line: !(number % 2) });
      });
      break;
    case SORT_TEN:
      newState.sort((a, b) => b.number - a.number);
      break;
    case SORT_TEN_DESC:
      newState.sort((a, b) => a.number - b.number);
      break;
    case SORT_TEN_RESET:
      newState.sort((a, b) => a.row - b.row);
      break;
    default:
  }
  return newState;
}

export default ten;
