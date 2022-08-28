import { useState } from 'react';
import './App.scss';

function App() {
  const [color, setColor] = useState('crimson');

  const clicked = () => {
    console.log('labas');
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>State</h1>
        <button onClick={clicked}>CLICK!</button>
      </header>
    </div>
  );
}

export default App;
