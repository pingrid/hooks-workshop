import React from 'react';

import Oppg4 from './Oppg4';

function Oppg4Wrapper() {
  return (
    <div>
      <h1>Oppgave 4</h1>
      <pre>
        Denne oppgaven er veldig lik oppgave 1, men her skal du bytte ut
        useState med useReducer
      </pre>
      <hr style={{ marginBottom: 50 }} />

      <Oppg4 />
    </div>
  );
}

export default Oppg4Wrapper;
