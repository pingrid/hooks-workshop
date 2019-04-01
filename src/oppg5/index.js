import React from 'react';
import Oppg5 from './Oppg5';

function Oppg5Wrapper() {
  return (
    <div>
      <h1>Oppgave 5</h1>
      <pre>
        Bytt ut lokal tilstand (useState) til å bruke global tilstand
        (useContext(StateContext))
      </pre>
      <hr style={{ marginBottom: 50 }} />

      <Oppg5 />
    </div>
  );
}

export default Oppg5Wrapper;
