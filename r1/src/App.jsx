// import { useEffect } from 'react';
// import { useState } from 'react';
import './App.scss';
import Timeout from './components/021/Timeout';
// import TwoSk from './components/021/TwoSk';
// import Sq from './components/021/Sq';

function App() {
  //   const [counter, setCounter] = useState(0);

  //   useEffect(() => {
  //     const intervalId = setInterval(() => {
  //       setCounter((c) => c + 1);
  //     }, 1000);

  //     return () => {
  //       clearInterval(intervalId);
  //     };
  //   }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <h2>
          <Timeout />
        </h2>
      </header>
    </div>
  );
}

export default App;
