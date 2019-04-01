/**
 * Oppgave 4
 *
 * Denne oppgaven er veldig lik oppgave 1, men her skal du bytte ut useState med useReducer
 */

import React, { useState } from 'react';

export default function Oppg4() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <div>Counter: {counter}</div>
      <button onClick={() => setCounter(counter - 1)}>-</button>
    </div>
  );
}
