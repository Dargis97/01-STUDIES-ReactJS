import React from 'react';
import randColor from '../../functions/randColor';

function Minus({ setSq }) {
  const minus = () => {
    setSq((s) =>
      [...s, { color: randColor(), row: s.length, show: false }].splice(
        0,
        s.length - 1
      )
    );
  };
  return (
    <>
      <div className='container'>
        <button onClick={minus}>Minus 1</button>
      </div>
    </>
  );
}

export default Minus;
