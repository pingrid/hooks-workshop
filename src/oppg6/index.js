import React, { useRef, useState } from 'react';

function Oppg6() {
  const elem = useRef(null);
  const [foo, setFoo] = useState(null);
  const onClick = () => setFoo(window['\x61\x73\x64\x66'](elem.current.value));

  return (
    <div>
      <h1>Oppgave 6</h1>
      <pre>Hva er meningen med livet?</pre>
      <hr style={{ marginBottom: 50 }} />

      <input type="text" ref={elem} />
      <button onClick={onClick}>Svar</button>

      <div style={{ height: 50 }} />
      {Object.entries(foo || {}).map(([a, b]) => (
        <div key={a}>
          {/* eslint-disable-next-line react/jsx-no-target-blank */}
          <a href={b} target="_blank">
            {a}
          </a>
        </div>
      ))}
    </div>
  );
}

export default Oppg6;
