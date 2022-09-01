import React from 'react';
import { useState } from 'react';

function Checkbox() {
  const [cb, setCb] = useState({ A: false, B: true, C: true, D: false });

  const change = (e) => {
    const v = e.target.value;

    setCb((c) => ({ ...c, [v]: !c[v] }));
  };

  return (
    <>
      <div className='form-container'>
        <div>
          <input
            onChange={change}
            type='checkbox'
            value='A'
            id='_1'
            checked={cb.A}
          />
          <label style={{ color: cb.A ? 'crimson' : null }} htmlFor='_1'>
            A raide
          </label>
        </div>
        <div>
          <input
            onChange={change}
            type='checkbox'
            value='B'
            id='_2'
            checked={cb.B}
          />
          <label style={{ color: cb.B ? 'crimson' : null }} htmlFor='_2'>
            B raide
          </label>
        </div>
        <div>
          <input
            onChange={change}
            type='checkbox'
            value='C'
            id='_3'
            checked={cb.C}
          />
          <label style={{ color: cb.C ? 'crimson' : null }} htmlFor='_3'>
            C raide
          </label>
        </div>
        <div>
          <input
            onChange={change}
            type='checkbox'
            value='D'
            id='_4'
            checked={cb.D}
          />
          <label style={{ color: cb.D ? 'crimson' : null }} htmlFor='_4'>
            D raide
          </label>
        </div>
      </div>
    </>
  );
}

export default Checkbox;
