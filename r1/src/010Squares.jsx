import React from 'react';
import './App.scss';
import Plus from './components/010/Plus';
import Squares from './components/010/Squares';
import { useState } from 'react';
import Minus from './components/010/Minus';

function App() {
  const [sq, setSq] = useState([]);

  return (
    <div className='App'>
      <header className='App-header'>
        <Squares sq={sq} />
        <Plus setSq={setSq} />
        <Minus setSq={setSq} />
      </header>
    </div>
  );
}

export default App;
