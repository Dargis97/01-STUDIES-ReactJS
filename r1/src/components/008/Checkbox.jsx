import React from 'react';

function Checkbox() {
  return (
    <>
      <div className='form-container'>
        <div>
          <input type='checkbox' value='A' />
          <label>A raide</label>
        </div>
        <div>
          <input type='checkbox' value='B' />
          <label>B raide</label>
        </div>
        <div>
          <input type='checkbox' value='C' />
          <label>C raide</label>
        </div>
        <div>
          <input type='checkbox' value='D' />
          <label>D raide</label>
        </div>
      </div>
    </>
  );
}

export default Checkbox;
