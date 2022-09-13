import { useEffect } from 'react';
import { useState } from 'react';
import './App.scss';

import randColor from './functions/randColor';

function App() {
  const [sq, setSq] = useState([]);

  const [pluses, setPluses] = useState(null);
  const [color, setColor] = useState(null);

  useEffect(() => {
    let data = localStorage.getItem('set_color');

    if (null === data) {
      setColor('white');
    } else {
      setColor(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    if (color === null) {
      return;
    }
    localStorage.setItem('set_color', JSON.stringify(color));
  }, [color]);

  useEffect(() => {
    let data = localStorage.getItem('plus_count');

    if (null === data) {
      setPluses('');
    } else {
      setPluses(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    if (pluses === null) {
      return;
    }
    localStorage.setItem('plus_count', JSON.stringify(pluses));
  }, [pluses]);

  useEffect(() => {
    let data = localStorage.getItem('sq_count');

    if (null === data) {
      setSq([]);
    } else {
      setSq(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    if (sq === null) {
      return;
    }
    localStorage.setItem('sq_count', JSON.stringify(sq));
  }, [sq]);

  const add = () => {
    setSq((s) => [...s, randColor()]);
  };

  const del = () => {
    setSq((s) => [...s, randColor()].splice(0, s.length - 1));
  };

  const addPlus = () => {
    setPluses((s) => s + '+');
  };

  const changeColor = () => {
    setColor(randColor());
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <div className='container'>
          {sq.map((c, i) => (
            <div style={{ backgroundColor: c }} key={i}>
              {i}
            </div>
          ))}
        </div>
        <div>
          <button onClick={add}>Add</button>
          <button onClick={del}>Delete Last</button>
        </div>

        <div>{pluses}</div>
        <button onClick={addPlus}>Add +</button>

        <div className='container'>
          <div onClick={changeColor} style={{ backgroundColor: color }}></div>
          <button onClick={changeColor}>color</button>
        </div>
      </header>
    </div>
  );
}

export default App;
