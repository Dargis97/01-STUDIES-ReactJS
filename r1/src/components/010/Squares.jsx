import React from 'react';

function Squares({ sq }) {
  return (
    <>
      <div className='container'>
        {sq.map((n, i) =>
          n.show ? (
            <div style={{ backgroundColor: n.color }} key={i}></div>
          ) : null
        )}
      </div>
    </>
  );
}

export default Squares;
