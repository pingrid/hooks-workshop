import { useState, useEffect } from "react";

function getStarshipUrl(starshipId) {
  return `https://swapi.co/api/starships/${starshipId}/`;
}

const initialState = {
  starship: null,
  loading: true,
  error: false,
};

export default function useStarshipFetcher(starshipId) {
  const [starshipState, setStarshipState] = useState(initialState);

  useEffect(() => {
    fetchStarship();
  }, [starshipId]);


  const fetchStarship = () => {
    setStarshipState(initialState);
    const url = getStarshipUrl(starshipId);
    fetch(url)
      .then(result => result.json())
      .then(json => {
        setStarshipState({ starship: json, loading: false, error: false });
      })
      .catch(() => setStarshipState({starship: null, loading: false, error: true}))

  };

  return starshipState;
}
