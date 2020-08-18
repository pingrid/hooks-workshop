/**
 * Oppgave 1
 *
 * Gjør om Oppg1-komponenten til å bli en function component
 * som bruker useState til å holde på counter-tilstanden
 */
import React, { useState } from 'react';

const Oppg1 = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <div>Counter: {counter}</div>
      <button onClick={() => setCounter(counter - 1)}>-</button>
    </div>
  );
};

export default Oppg1;
