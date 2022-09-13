import { useState } from 'react';

function T4() {
  const [show, setShow] = useState('false');

  return (
    <div>
      {show ? (
        <img
          alt='paveiksl'
          onClick={() => setShow(false)}
          src='imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg'
        />
      ) : null}
      <button onClick={() => setShow(true)}>show</button>
    </div>
  );
}

export default T4;
