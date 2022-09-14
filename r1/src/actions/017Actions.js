import {
  ADD_SOME,
  BORDER_BOX,
  BORDER_STYLE,
  BOX_SIZE,
  CHANGE_COLOR,
  RAND_NUM,
  REM_SOME,
  SORT_TEN,
  SORT_TEN_DESC,
  SORT_TEN_RESET,
} from '../constants/017Const';

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

export function borderStyled(border) {
  return {
    type: BORDER_STYLE,
    payload: border,
  };
}

export function addSome(what) {
  return {
    type: ADD_SOME,
    payload: what,
  };
}

export function remSome(what) {
  return {
    type: REM_SOME,
    payload: what,
  };
}

export function randNum() {
  return {
    type: RAND_NUM,
  };
}

export function sort10() {
  return {
    type: SORT_TEN,
  };
}

export function sort10D() {
  return {
    type: SORT_TEN_DESC,
  };
}

export function sort10R() {
  return {
    type: SORT_TEN_RESET,
  };
}
