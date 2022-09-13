import React from 'react';
import { useState } from 'react';
import rand from '../../functions/rand';

function Skaic() {
  const [number, setNumber] = useState([
    rand(0, 100),
    rand(0, 100),
    rand(0, 100),
  ]);

  const nr = () => {
    setNumber([rand(0, 100), rand(0, 100), rand(0, 100)]);
  };

  return (
    <d>
      <div>
        {[...number]
          .sort((a, b) => b - a)
          .map((n, i) => (
            <span key={i}>{n} </span>
          ))}
      </div>
      <button onClick={nr}>Random number</button>
    </d>
  );
}

export default Skaic;
