import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function Sq() {
  const [sq, setSq] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSq((c) => (c >= 5 ? 0 : c + 1));
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <div className='container'>
        {[...Array(sq)].map((_, i) => (
          <div key={i}></div>
        ))}
      </div>
    </>
  );
}

export default Sq;
