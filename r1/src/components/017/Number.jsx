import { useReducer, useState } from 'react';
import { addSome, remSome } from '../../actions/017Actions';
import number from '../../reducers/number';

function Number() {
  const [num, dispachNum] = useReducer(number, { number: 0 });
  const [input, setInput] = useState(0);

  return (
    <>
      <h2>{num.number}</h2>

      <input
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className='container'>
        <button onClick={() => dispachNum(addSome(input))}>Add</button>
        <button onClick={() => dispachNum(remSome(input))}>Remove</button>
      </div>
    </>
  );
}

export default Number;
