import { ADD_SOME, REM_SOME } from '../constants/017Const';

function number(state, action) {
  let newState = { ...state };

  switch (action.type) {
    case ADD_SOME:
      newState.number = newState.number += parseInt(action.payload);
      break;

    case REM_SOME:
      newState.number = newState.number -= parseInt(action.payload);
      break;

    default:
  }

  return newState;
}

export default number;
