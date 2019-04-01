import React, { useContext } from 'react';
import { StateContext } from './StateContext';

export default function Hemmelig() {
  const [text] = useContext(StateContext);

  if (!text) {
    return null;
  }

  return (
    <div style={{ marginTop: 50 }}>
      <strong>Yay! Ser ut som du har klart oppgave 4</strong>
      <br />
      {text}
    </div>
  );
}
