/**
 * Oppgave 4
 *
 * Bytt ut lokal tilstand (useState) til å bruke global tilstand (useContext(StateContext))
 */

import React, { useState } from 'react';
// import { StateContext } from "./StateContext";

export default function Oppg4() {
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
        multiple
        style={{ width: '100%', height: 50, fontSize: 20 }}
      />
    </div>
  );
}
