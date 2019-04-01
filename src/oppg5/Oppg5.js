/**
 * Oppgave 5
 *
 * Bytt ut lokal tilstand (useState) til å bruke context (useContext(StateContext))
 *
 * Ekstra:
 * Endre StateContext-valuen til å være et objekt slik at den kan
 * holde flere verdier enn kun en tekststreng
 */

import React, { useState } from 'react';
// import { StateContext } from "./StateContext";

function Oppg5() {
  const [text, setText] = useState('');

  function handleTextChange(event) {
    setText(event.target.value);
  }

  return (
    <div>
      <div>Her kan du skrive no tekst</div>
      <input
        type="text"
        value={text}
        onChange={handleTextChange}
        style={{ width: '100%', height: 50, fontSize: 20 }}
      />
    </div>
  );
}

export default Oppg5;
