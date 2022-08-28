import React from 'react';
import randColor from '../../functions/randColor';

function Raccoon() {
  return <div style={{ color: randColor() }}>Raccoon</div>;
}

export default Raccoon;
