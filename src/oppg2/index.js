import React, { useState } from "react";

import Oppg2 from "./Oppg2";

const persons = [
  { name: "Luke Skywalker", id: 1 },
  { name: "C-3PO", id: 2 },
  { name: "R2-D2", id: 3 },
  { name: "Darth Vader", id: 4 },
  { name: "Leia Organa", id: 5 },
  { name: "Obi-Wan Kenobi", id: 10 },
  { name: "Chewbacca", id: 13 },
  { name: "Han Solo", id: 14 }
];

export default function PersonSelector() {
  const [activePerson, setActivePerson] = useState(null);

  function handlePersonClick(person) {
    setActivePerson(person);
  }

  return (
    <div>
      <h1>Oppgave 2</h1>

      {persons.map(person => {
        return (
          <span
            key={person.id}
            onClick={() => handlePersonClick(person)}
            style={{
              padding: 10,
              cursor: "pointer",
              border:
                activePerson && activePerson.id === person.id
                  ? "2px solid black"
                  : "1px solid lightgray"
            }}
          >
            {person.name}
          </span>
        );
      })}
      <div style={{ marginTop: 50 }}>
        {activePerson ? (
          <Oppg2 personId={activePerson.id} />
        ) : (
          <span>Klikk på navnene for å vise info om dem</span>
        )}
      </div>
    </div>
  );
}
