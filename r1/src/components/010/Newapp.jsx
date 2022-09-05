import React from 'react';
import { useState } from 'react';

function Newapp({ setDis1, setDis2 }) {
  const [cb1, setCb1] = useState(false);
  const [cb2, setCb2] = useState(false);

  return (
    <>
      <div className='form-container'>
        <div style={{ display: 'flex', margin: '10px' }}>
          <div style={{ margin: ' 0 20px' }}>
            <input
              type='checkbox'
              id='_2'
              onChange={() => setCb1((c) => !c)}
              checked={cb1}
            ></input>
            <label htmlFor='_2' style={{ color: cb1 ? 'crimson' : null }}>
              ONE
            </label>
          </div>
          <div>
            <input
              type='checkbox'
              id='_3'
              onChange={() => setCb2((c) => !c)}
              checked={cb2}
            ></input>
            <label htmlFor='_3' style={{ color: cb2 ? 'crimson' : null }}>
              TWO
            </label>
          </div>
        </div>
        <div style={{ display: 'flex', margin: ' 0 10px' }}>
          <button onClick={() => setDis1(cb1)}>Press 1</button>
          <button onClick={() => setDis2(cb2)}> Press 2</button>
        </div>
      </div>
    </>
  );
}

export default Newapp;
