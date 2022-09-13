import React from 'react';
import { useReducer } from 'react';
import count from '../../reducers/count';
import {
  add1,
  rem1,
  add2,
  rem2,
  add5,
  rem5,
  changeColor,
  changeFont,
  BorderKey,
  addSquares,
  remSquares,
} from '../../actions/count';
import Square from '../../reducers/Square';

function Count() {
  const [counter, dispachCounter] = useReducer(count, {
    number: 0,
    color: '#54aaaa',
    font: '50',
    border: false,
  });

  const [sq, dispachSq] = useReducer(Square, []);

  return (
    <>
      <h2
        style={{
          border: counter.border ? '3px solid skyblue' : null,
          fontSize: counter.font + 'px',
          color: counter.color,
        }}
      >
        {counter.number}
      </h2>

      <div>
        <div className='container'>
          {sq.map((_, i) => (
            <div key={i}>{i + 1}</div>
          ))}
        </div>
      </div>

      <div className='container'>
        <button onClick={() => dispachCounter(add1())}>+1</button>
        <button onClick={() => dispachCounter(rem1())}>-1</button>
        <button onClick={() => dispachCounter(add2())}>+2</button>
        <button onClick={() => dispachCounter(rem2())}>-2</button>
        <button onClick={() => dispachCounter(add5())}>+5</button>
        <button onClick={() => dispachCounter(rem5())}>-5</button>
      </div>
      <div className='container'>
        <button onClick={() => dispachSq(addSquares())}>Add squares</button>
        <button onClick={() => dispachSq(remSquares())}>Remove squares</button>

        <button onClick={() => dispachCounter(changeFont())}>
          Change font
        </button>
        <button onClick={() => dispachCounter(changeColor())}>
          Change color
        </button>

        <button onClick={() => dispachCounter(BorderKey())}>Border</button>
      </div>
    </>
  );
}

export default Count;
