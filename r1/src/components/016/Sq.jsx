import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import randColor from '../../functions/randColor';

function Sq() {
  const [kv, setKv] = useState([]);

  useEffect(() => {
    setKv([...Array(10)].map((_, i) => ({ id: i + 1, color: 'white' })));
  }, []);

  const changeColor = (id) => {
    setKv((s) =>
      s.map((c) => (c.id === id ? { ...c, color: randColor() } : { ...c }))
    );
  };

  return (
    <>
      <div className='container'>
        {kv.map((s) => (
          <div
            onClick={() => changeColor(s.id)}
            style={{ backgroundColor: s.color }}
            key={s.id}
          ></div>
        ))}
      </div>
    </>
  );
}

export default Sq;
