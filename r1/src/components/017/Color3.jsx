import React from 'react';
import { useState } from 'react';
import { useReducer } from 'react';
import {
  borderBox,
  borderStyled,
  changeBoxSize,
  colorChange,
} from '../../actions/017Actions';
import Coloring from '../../reducers/Coloring';

function Color3() {
  const [box, dispatchBox] = useReducer(Coloring, {
    color: 1,
    size: 1,
    border: 0,
    borderStyle: 'solid',
  });

  const [border, setBorder] = useState(0);
  const [borderStyle, setBorderStyle] = useState('solid');

  return (
    <>
      <div className='container'>
        <div
          style={{
            border: box.border + 'px ' + box.borderStyle + ' yellow',
            backgroundColor: ['crimson', 'skyblue', 'darkgreen'][box.color - 1],
            width: ['20px', '40px', '80px'][box.size - 1],
            height: ['20px', '40px', '80px'][box.size - 1],
          }}
          className='box'
        ></div>
      </div>
      <div className='container'>
        <button onClick={() => dispatchBox(colorChange())}>Change Color</button>
        <button onClick={() => dispatchBox(changeBoxSize())}>
          Change size
        </button>
      </div>
      border size:
      <input
        type='number'
        value={border}
        onChange={(e) => setBorder(e.target.value)}
      />
      <button onClick={() => dispatchBox(borderBox(border))}>Set Border</button>
      border type:
      <select
        value={borderStyle}
        onChange={(e) => setBorderStyle(e.target.value)}
      >
        <option value='solid'>Solid</option>
        <option value='dotted'>Dotted</option>
        <option value='dashed'>Dashed</option>
      </select>
      <button onClick={() => dispatchBox(borderStyled(borderStyle))}>
        Set border style
      </button>
    </>
  );
}

export default Color3;
