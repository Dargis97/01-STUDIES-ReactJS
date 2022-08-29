import React from 'react';
import { useState } from 'react';
import rand from '../../functions/rand';
import randColor from '../../functions/randColor';

function Squares() {
  const [sq, setSq] = useState([]);

  const add = () => {
    setSq((s) => [...s, { number: rand(100, 999), color: randColor() }]);
  };

  const sort = () => {
    setSq((s) => [...s].sort((a, b) => b.number - a.number));
  };

  const filter = () => {
    setSq((s) => [...s].filter((c) => c.number < 300));
  };
  const reset = () => {
    setSq((s) => []);
  };

  return (
    <>
      <h1>State {sq.filter((s) => s.number < 300).length}</h1>
      <div className='container'>
        {sq.map((n, i) => (
          <div
            style={{
              backgroundColor: n.number < 300 ? 'black' : n.color,
              borderRadius: n.number % 2 ? null : '50%',
            }}
            key={i}
          >
            {n.number}
          </div>
        ))}
      </div>

      <div>
        <button onClick={add}>Add []</button>
        <button onClick={sort}>Sort</button>
      </div>
      <button onClick={filter}>Filter lower than 400 </button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default Squares;
