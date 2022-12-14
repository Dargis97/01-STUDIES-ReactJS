import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import rand from '../../functions/rand';
import randColor from '../../functions/randColor';

function Squares() {
  const [sq, setSq] = useState([]);
  const [number, setNumber] = useState(null);
  const [color, setColor] = useState(null);
  const [sorting, setSort] = useState(true);

  useEffect(() => {
    setColor(randColor);
  }, [sq]);

  const add = () => {
    setSq((s) => [
      ...s,
      { number: rand(100, 999), color: randColor(), row: s.length, show: true },
    ]);
  };

  const getNr = (num) => {
    setNumber(num);
    setSq((s) =>
      s.map((square) =>
        square.number === num ? { ...square, show: false } : { ...square }
      )
    );
  };

  const sort1 = () => {
    setSq((s) => [...s].sort((a, b) => b.number - a.number));
  };
  const sort2 = () => {
    setSq((s) => [...s].sort((a, b) => a.number - b.number));
  };

  const sortDefault = () => {
    setSq((s) =>
      s
        .map((square) => ({ ...square, show: true }))
        .sort((a, b) => a.row - b.row)
    );
  };

  const resurect = () => {
    setSq((s) =>
      s.map((square) =>
        square.number === number ? { ...square, show: true } : { ...square }
      )
    );
  };

  const showBlack = () => {
    setSq((s) =>
      s.map((square) =>
        square.number < 300
          ? { ...square, show: true }
          : { ...square, show: false }
      )
    );
  };
  const showColored = () => {
    setSq((s) =>
      s.map((square) =>
        square.number < 300
          ? { ...square, show: false }
          : { ...square, show: true }
      )
    );
  };

  const sortFiveElements = () => {
    setSq((s) =>
      s.map((square, i) =>
        i < 5 ? { ...square, show: true } : { ...square, show: false }
      )
    );
  };
  // 1 Sprendimas
  // const sortBothSides = () => {
  //   setSq((s) => [...s].sort((a, b) => sorting * (b.number - a.number)));
  //   setSort((s) => s * -1);
  // };
  // Antras
  const sortBothSides = () => {
    sorting ? sort1() : sort2();
    setSort((s) => !s);
  };

  return (
    <>
      <h1 style={{ color: color }}>
        {number} State {sq.filter((s) => s.number < 300).length}
      </h1>
      <div className='container'>
        {sq.map((n, i) =>
          n.show ? (
            <div
              key={i}
              onClick={() => getNr(n.number)}
              style={{
                backgroundColor: n.number < 300 ? 'black' : n.color,

                borderRadius: n.number % 2 ? null : '50%',
              }}
            >
              {n.number}
            </div>
          ) : null
        )}
      </div>

      <div className='container'>
        <button onClick={add}>Add []</button>
        <button onClick={sort1}>Higher to Lower</button>
        <button onClick={sort2}>Lower to Higher</button>
        <button onClick={sortDefault}>Sort Default</button>

        <button onClick={showBlack}>Show Black</button>
        <button onClick={showColored}>Show Colored</button>
        <button onClick={resurect}>Resurect</button>
        <button onClick={sortFiveElements}>Show first 5</button>
        <button onClick={sortBothSides}>Sorting</button>
      </div>
    </>
  );
}

export default Squares;
