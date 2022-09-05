import './App.scss';
import Text from './components/010/Text';
import { useState } from 'react';
import Newapp from './components/010/Newapp';

function App() {
  const [dis1, setDis1] = useState(false);
  const [dis2, setDis2] = useState(false);
  const [textNow, setTextNow] = useState('');
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>State Uplifting</h1>
        <div style={{ display: 'flex' }}>
          {dis1 ? <div className='box'></div> : null}
          {dis2 ? <div className='circle'></div> : null}
        </div>
        <h2>TEXT: {textNow}</h2>
        <Text setTextNow={setTextNow} />
        <Newapp setDis1={setDis1} setDis2={setDis2} />
      </header>
    </div>
  );
}

export default App;
