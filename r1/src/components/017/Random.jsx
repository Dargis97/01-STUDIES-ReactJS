import { useEffect } from 'react';
import { useReducer } from 'react';
import { randNum, sort10, sort10D, sort10R } from '../../actions/017Actions';

import random from '../../reducers/random';

function Random() {
  const [numbers, dispachNumbers] = useReducer(random, []);

  useEffect(() => {
    dispachNumbers(randNum());
  }, []);

  return (
    <>
      <div className='container'>
        {numbers.map((n, i) => (
          <h4
            key={i}
            style={{ borderBottom: n.line ? '2px solid orange' : null }}
          >
            {n.number}
          </h4>
        ))}
      </div>
      <div className='container'>
        <button onClick={() => dispachNumbers(randNum())}>Remake</button>
        <button onClick={() => dispachNumbers(sort10())}>sort 9-1</button>
        <button onClick={() => dispachNumbers(sort10D())}>sort 1-9</button>
        <button onClick={() => dispachNumbers(sort10R())}>sort reset</button>
      </div>
    </>
  );
}

export default Random;
