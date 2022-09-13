import React from 'react';
import { useState } from 'react';
import randColor from '../../functions/randColor';
function T6() {
  const [show, setShow] = useState(true);

  return (
    <div className='container'>
      {[...Array(10)].map((_, i) =>
        show ? (
          <div
            style={{ backgroundColor: randColor() }}
            key={i}
            onClick={() => setShow(false)}
            className='circle'
          ></div>
        ) : null
      )}
    </div>
  );
}

export default T6;
