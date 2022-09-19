import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import rand from '../../functions/rand';

function TwoSk() {
  const [counter, setCounter] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const d = [rand(10, 99), rand(10, 99)];
      setCounter(d);
      setCount((c) => c + 1);
      if (d[0] === d[1]) {
        clearInterval(intervalId);
      }
    }, 100);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h2>
        {counter[0]} - {counter[1]}
      </h2>

      <h2>Count: {count}</h2>
    </div>
  );
}

export default TwoSk;
