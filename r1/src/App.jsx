import { useState } from 'react';
import './App.scss';

function App() {
  const [color, setColor] = useState('crimson');
  const [size, setSize] = useState(null);
  const [count, setCount] = useState(0);
  const [space, setSpace] = useState(5);

  const doBigger = () => {
    setSpace(10);
  };
  const doSmaller = () => {
    setSpace(5);
  };

  const clicked = () => {
    setColor((c) => (c === 'skyblue' ? 'crimson' : 'skyblue'));
  };

  const doSize = () => {
    setSize((s) => (s === 40 ? 16 : 40));
  };

  const countNumber = () => {
    setCount((c) => c + 1);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 style={{ color: color, letterSpacing: space + 'px' }}>
          State {count}
        </h1>
        <button onClick={clicked}>Color change</button>
        <button style={{ fontSize: size + 'px' }} onClick={doSize}>
          {' '}
          Size change
        </button>
        <button onClick={countNumber}>Increase count</button>
        <button onClick={doSmaller}>5px</button>
        <button onClick={doBigger}>10px</button>
      </header>
    </div>
  );
}

export default App;
