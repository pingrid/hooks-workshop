/**
 * Oppgave 4
 *
 * Denne oppgaven er veldig lik oppgave 1, men her skal du bytte ut useState med useReducer
 *
 * Ekstra:
 * Lag en knapp som gjør at counter blir multiplisert med et tall
 * (feks 10 eller 1337 (eller kanskje fra et input-felt))
 */

import React, { useReducer } from 'react';

const initialState = { counter: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'INC':
      return { counter: state.counter + 1 };
    case 'DEC':
      return { counter: state.counter - 1 };
    case 'MULTIPLY':
      return { counter: state.counter * 10 };
    default:
    return state;
  }
};

function Oppg4() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <button onClick={() => dispatch({type: 'INC'})}>+</button>
      <div>Counter: {state.counter}</div>
      <button onClick={() => dispatch({type: 'DEC'})}>-</button>
      <button onClick={() => dispatch({type: 'MULTIPLY'})}>MULTIPLY BY 10</button>
    </div>
  );
}

export default Oppg4;
