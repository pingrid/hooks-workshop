import React from 'react';

import Oppg1 from './Oppg1';

function Oppg1Wrapper() {
  return (
    <div>
      <h1>Oppgave 1</h1>
      {/* eslint-disable-next-line */}
      <pre>
        Kompontenten `Oppg1` er en klassekomponent (🤮).{'\n'}Endre den slik at
        den blir en function component som bruker useState til å holde på
        counter-tilstanden
      </pre>
      <hr style={{ marginBottom: 50 }} />

      <Oppg1 />
    </div>
  );
}

export default Oppg1Wrapper;
