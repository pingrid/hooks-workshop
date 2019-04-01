/**
 * Oppgave 4
 *
 * Denne oppgaven er veldig lik oppgave 1, men her skal du bytte ut useState med useReducer
 *
 * Ekstra:
 * Lag en knapp som gjør at counter blir multiplisert med et tall
 * (feks 10 eller 1337 (eller kanskje fra et input-felt))
 */

import React, { useState } from 'react';

function Oppg4() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <div>Counter: {counter}</div>
      <button onClick={() => setCounter(counter - 1)}>-</button>
    </div>
  );
}

export default Oppg4;
