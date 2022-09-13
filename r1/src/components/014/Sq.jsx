import { useState } from 'react';
import randColor from '../../functions/randColor';

function Sq() {
  const [color, setColor] = useState({
    ba: randColor(),
    bo: randColor(),
  });

  const changeColor = () => {
    setColor({
      ba: randColor(),
      bo: randColor(),
    });
  };

  return (
    <>
      <div
        style={{ borderColor: color.bo, backgroundColor: color.ba }}
        className='box'
      ></div>
      <button onClick={changeColor}>Change color</button>
    </>
  );
}

export default Sq;
