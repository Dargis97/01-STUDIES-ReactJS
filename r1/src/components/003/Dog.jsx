import React from 'react';
import rand from '../../functions/rand';

function Dog() {
  return (
    <>
      <h2
        className='h2'
        style={{
          // Kitas budas su 2 ifais
          // color: rand(0, 2) ? (rand(0, 1) ? 'red' : 'blue') : 'orange',
          color: ['crimson', 'skyblue', 'orange'][rand(0, 2)],
          fontSize: rand(0, 1) ? '40px' : null,
        }}
      >
        Dog {rand(0, 1) ? 'White' : 'Black'}
      </h2>
      <h3 className={rand(0, 1) ? 'dog' : 'cat'}>Big {rand(100, 999)}</h3>
    </>
  );
}

export default Dog;
