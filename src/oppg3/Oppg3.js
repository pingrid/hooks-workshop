/**
 * Oppgave 3
 *
 * Lag en custom hook for å hente data om stjerneskip fra api-et
 */

import React from "react";
import useStarshipFetcher from "./useStarshipFetcher";

function Row({ label, value }) {
  return (
    <tr>
      <td style={{ paddingRight: 20 }}>
        <strong>{label}</strong>
      </td>
      <td>
        <span>{value}</span>
      </td>
    </tr>
  );
}

export default function Oppg3({ starshipId }) {
  const { starship, loading, error } = useStarshipFetcher(starshipId);
  // const { starship, loading, error } = {
  //   starship: null,
  //   loading: true,
  //   error: false
  // };

  if (loading) {
    return <div>Laster...</div>;
  }

  if (error) {
    return <div>Noe gikk galt :(</div>;
  }

  return (
    <table>
      <tbody>
        <Row label="Navn" value={starship.name} />
        <Row label="Modell" value={starship.model} />
        <Row label="Manufacturer" value={starship.manufacturer} />
        <Row label="Pris (i credits)" value={starship.cost_in_credits} />
        <Row label="Lengde" value={starship.length} />
        <Row label="Mannskap" value={starship.crew} />
        <Row label="Passasjerer" value={starship.passengers} />
        <Row label="Hyperdrive rating" value={starship.hyperdrive_rating} />
      </tbody>
    </table>
  );
}
