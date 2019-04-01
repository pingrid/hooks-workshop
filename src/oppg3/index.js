import React, { useState } from "react";

import Oppg3 from "./Oppg3";

const starships = [
  { name: "Death Star", id: 9 },
  { name: "Millennium Falcon", id: 10 },
  { name: "Y-wing", id: 11 },
  { name: "X-wing", id: 12 },
  { name: "Imperial shuttle", id: 22 },
  { name: "Jedi starfighter", id: 48 },
  { name: "Star Destroyer", id: 3 }
];

export default function StarshipSelector() {
  const [activeStarship, setActiveStarship] = useState(null);

  function handleStarshipClick(starship) {
    setActiveStarship(starship);
  }

  return (
    <div>
      <h1>Oppgave 3</h1>

      {starships.map(starship => {
        return (
          <span
            key={starship.id}
            onClick={() => handleStarshipClick(starship)}
            style={{
              padding: 10,
              cursor: "pointer",
              border:
                activeStarship && activeStarship.id === starship.id
                  ? "2px solid black"
                  : "1px solid lightgray"
            }}
          >
            {starship.name}
          </span>
        );
      })}
      <div style={{ marginTop: 50 }}>
        {activeStarship ? (
          <Oppg3 starshipId={activeStarship.id} />
        ) : (
          <span>Klikk på navnene for å vise info om dem</span>
        )}
      </div>
    </div>
  );
}
