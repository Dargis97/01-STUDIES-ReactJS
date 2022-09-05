import React from 'react';
import randColor from '../../functions/randColor';

function Plus({ setSq }) {
  const add = () => {
    setSq((s) => [...s, { color: randColor(), row: s.length, show: true }]);
  };

  return (
    <>
      <div className='container'>
        <button onClick={add}>Plus 1</button>
      </div>
    </>
  );
}

export default Plus;
