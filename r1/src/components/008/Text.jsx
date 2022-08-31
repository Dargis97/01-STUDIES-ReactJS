import React from 'react';
import { useState } from 'react';

function Text() {
  const [text, setText] = useState('');
  const [color, setColor] = useState('#07FAD4');
  const [range, setRange] = useState(0);
  const [t, showT] = useState('');

  const control = (e) => {
    // Number(e.target.value) && setText(e.target.value);
    setText(e.target.value);
  };

  const changeColor = (e) => {
    setColor(e.target.value);
  };

  const controlRange = (e) => {
    setRange(e.target.value);
  };

  const showText = () => {
    showT(text);
  };

  return (
    <>
      <div className='form-container'>
        <h2>TEXT {t}</h2>
        <input onChange={control} type='text' value={text} />
        <button onClick={showText}>Enter</button>
      </div>

      <div className='form-container'>
        <h2 style={{ color: color }}>COLOR</h2>
        <input onChange={changeColor} type='color' value={color} />
        <button
          style={{ marginTop: '10px' }}
          onClick={() => setColor('#ff0000')}
        >
          Change color
        </button>
      </div>

      <div className='form-container'>
        <h2>{range} </h2>
        <input
          onChange={controlRange}
          type='range'
          value={range}
          min={0}
          max={1000}
          step={5}
        />
      </div>
    </>
  );
}

export default Text;
