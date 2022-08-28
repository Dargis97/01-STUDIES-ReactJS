import React from 'react';
import rand from '../../functions/rand';

function Cat() {
  return rand(0, 1) ? <h1>Luna</h1> : <h2>Milo</h2>;
}

export default Cat;
