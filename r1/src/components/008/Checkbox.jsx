import React from 'react';
import { useState } from 'react';
import rand from '../../functions/rand';

const radioData = { A: false, B: false, C: true, D: false };

function Checkbox() {
  const [cb, setCb] = useState({ A: false, B: true, C: true, D: false });
  const [radio, setRadio] = useState(radioData);

  const change = (e) => {
    const v = e.target.value;

    setCb((c) => ({ ...c, [v]: !c[v] }));
  };

  const changeRandom = () => {
    setCb({
      A: rand(0, 1),
      B: rand(0, 1),
      C: rand(0, 1),
      D: rand(0, 1),
    });
  };

  const radioChange = (e) => {
    const v = e.target.value;
    const r = {};
    for (const a in radioData) {
      r[a] = a === v ? true : false;
    }
    setRadio(r);
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
        <button onClick={changeRandom}>random</button>
      </div>
      <div className='form-container'>
        <div>
          <input
            onChange={radioChange}
            type='checkbox'
            value='A'
            id='_5'
            checked={radio.A}
          />
          <label style={{ color: radio.A ? 'crimson' : null }} htmlFor='_5'>
            A raide
          </label>
        </div>
        <div>
          <input
            onChange={radioChange}
            type='checkbox'
            value='B'
            id='_6'
            checked={radio.B}
          />
          <label style={{ color: radio.B ? 'crimson' : null }} htmlFor='_6'>
            B raide
          </label>
        </div>
        <div>
          <input
            onChange={radioChange}
            type='checkbox'
            value='C'
            id='_7'
            checked={radio.C}
          />
          <label style={{ color: radio.C ? 'crimson' : null }} htmlFor='_7'>
            C raide
          </label>
        </div>
        <div>
          <input
            onChange={radioChange}
            type='checkbox'
            value='D'
            id='_8'
            checked={radio.D}
          />
          <label style={{ color: radio.D ? 'crimson' : null }} htmlFor='_8'>
            D raide
          </label>
        </div>
      </div>
    </>
  );
}

export default Checkbox;
