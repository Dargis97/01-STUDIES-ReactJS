import { BORDER_BOX, BOX_SIZE, CHANGE_COLOR } from '../constants/017Const';

export function colorChange() {
  return {
    type: CHANGE_COLOR,
  };
}

export function changeBoxSize() {
  return {
    type: BOX_SIZE,
  };
}

export function borderBox(border) {
  return {
    type: BORDER_BOX,
    payload: border,
  };
}
