import React from 'react';

function Cat({ cat }) {
  return (
    <div style={{ backgroundColor: cat.id % 2 ? null : 'red' }}>
      {cat.name} {cat.weight}
    </div>
  );
}

export default Cat;
