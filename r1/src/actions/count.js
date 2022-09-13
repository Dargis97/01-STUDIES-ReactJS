import {
  ADD_FIVE,
  ADD_ONE,
  ADD_TWO,
  REMOVE_FIVE,
  REMOVE_ONE,
  REMOVE_TWO,
  COLOR_RAND,
  FONT_RAND,
  BORDER_KEY,
  SQUARES_ADD,
  REMOVE_SQUARES,
} from '../constants/actions';

export function add1() {
  return {
    type: ADD_ONE,
  };
}

export function rem1() {
  return {
    type: REMOVE_ONE,
  };
}

export function add2() {
  return {
    type: ADD_TWO,
  };
}

export function rem2() {
  return {
    type: REMOVE_TWO,
  };
}

export function add5() {
  return {
    type: ADD_FIVE,
  };
}

export function rem5() {
  return {
    type: REMOVE_FIVE,
  };
}
export function changeColor() {
  return {
    type: COLOR_RAND,
  };
}
export function changeFont() {
  return {
    type: FONT_RAND,
  };
}
export function BorderKey() {
  return {
    type: BORDER_KEY,
  };
}

export function addSquares() {
  return {
    type: SQUARES_ADD,
  };
}
export function remSquares() {
  return {
    type: REMOVE_SQUARES,
  };
}
