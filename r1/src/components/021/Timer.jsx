import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function Timer() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((c) => c + 2);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    if (counter > 10) {
      setCounter(0);
    }
  }, [counter]);

  return (
    <div>
      <h2>{counter}</h2>
    </div>
  );
}

export default Timer;
