import { useState } from 'react';
import Sq from './components/011/Sq';
import './App.scss';
import randColor from './functions/randColor';

function App() {
  const [sq, setSq] = useState([]);

  const add = () => {
    if (sq.length < 9) {
      setSq((s) => [...s, randColor()]);
    }
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <div>
          <Sq setSq={setSq} sq={sq} />
          <button onClick={add}>Add</button>
        </div>
      </header>
    </div>
  );
}

export default App;
