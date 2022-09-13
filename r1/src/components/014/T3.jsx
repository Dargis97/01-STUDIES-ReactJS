import React from 'react';
import { useState } from 'react';

function T3() {
  const [show, setShow] = useState(false);
  return (
    <div>
      {show ? <div className='box' onClick={() => setShow(false)}></div> : null}
      <button onClick={() => setShow(true)}> a</button>
    </div>
  );
}

export default T3;
