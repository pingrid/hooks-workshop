import { useState, useEffect } from "react";

function getStarshipUrl(starshipId) {
  return `https://swapi.co/api/starships/${starshipId}/`;
}

export default function useStarshipFetcher(starshipId) {
  const [starship, setStarship] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setStarship(null);
    setLoading(true);
    setError(false);
    let cancelled = false;

    const url = getStarshipUrl(starshipId);
    fetch(url)
      .then(result => result.json())
      .then(json => {
        if (!cancelled) {
          setStarship(json);
          setLoading(false);
        }
      })
      .catch(error => {
        console.log(error);
        setLoading(true);
        setError(false);
      });

    return () => {
      cancelled = true;
    };
  }, [starshipId]);

  return {
    starship,
    loading,
    error
  };
}
