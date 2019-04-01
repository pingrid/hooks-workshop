import React from 'react';
import Oppg4 from './Oppg4';

function Oppg4Wrapper() {
  return (
    <div>
      <h1>Oppgave 4</h1>
      <pre>
        Bytt ut lokal tilstand (useState) til å bruke global tilstand
        (useContext(StateContext))
      </pre>
      <hr style={{ marginBottom: 50 }} />

      <Oppg4 />
    </div>
  );
}

export default Oppg4Wrapper;
