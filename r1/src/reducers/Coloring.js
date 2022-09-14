import {
  BORDER_BOX,
  BORDER_STYLE,
  BOX_SIZE,
  CHANGE_COLOR,
} from '../constants/017Const';

function Coloring(state, action) {
  let newState = { ...state };

  switch (action.type) {
    case CHANGE_COLOR:
      newState.color = newState.color === 3 ? 1 : newState.color + 1;
      break;
    case BOX_SIZE:
      newState.size = newState.size === 3 ? 1 : newState.size + 1;
      break;
    case BORDER_BOX:
      newState.border = action.payload;
      break;

    case BORDER_STYLE:
      newState.borderStyle = action.payload;
      break;

    default:
  }

  return newState;
}

export default Coloring;
