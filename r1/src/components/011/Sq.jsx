import React from 'react';
import randColor from '../../functions/randColor';

function Sq({ sq, setSq }) {
  const changeColor = (c) => {
    setSq((s) => s.map((kv) => (kv === c ? randColor() : kv)));
  };

  return (
    <div className='container9'>
      {sq.map((c, i) => (
        <div
          onClick={() => changeColor(c)}
          key={i}
          style={{ backgroundColor: c }}
        ></div>
      ))}
    </div>
  );
}

export default Sq;
