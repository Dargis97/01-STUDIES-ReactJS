import React from 'react';

import { useState } from 'react';

function Timeout() {
  const [color, setColor] = useState(null);

  const [counter, setCounter] = useState('');

  const changeColor = () => {
    const intervalId = setInterval(() => {
      setCounter((c) => {
        const n = c === '' ? 9 : c - 1;
        if (n === 0) {
          clearInterval(intervalId);
        }
        return n;
      });
    }, 100);
    setTimeout(() => {
      setColor('crimson');
    }, 1000);
  };
  return (
    <>
      <div
        onClick={changeColor}
        className='box'
        style={{ backgroundColor: color }}
      >
        {counter}
      </div>
    </>
  );
}

export default Timeout;
