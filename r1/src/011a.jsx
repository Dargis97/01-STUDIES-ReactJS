import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import './App.scss';
import Dog from './components/011/Dog';

function App() {
  const [dogs, setDogs] = useState([]);
  const [count, setCount] = useState(1);

  const index = useRef(0);
  const addButton = useRef();

  useEffect(() => {
    // const b = document.querySelector('#add-button');
    const b = addButton.current;
    b.focus();
  }, []);

  const add = () => {
    setDogs((s) => [...s, ++index.current]);
  };
  const plus = () => {
    setCount((c) => c + 1);
    console.log('senas :' + count);
  };

  useEffect(() => {
    console.log('Dogs Changed or Added one');
    console.log('naujas :' + count);
  }, [dogs, count]);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>UseEffect {count} </h1>

        <div className='container'>
          {dogs.map((n, i) => (
            <Dog key={n} i={n} />
          ))}
        </div>
        <div className='container'>
          <button onClick={add} id='add-button'>
            Add Dog
          </button>
          <button onClick={plus} ref={addButton}>
            Plus1
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
