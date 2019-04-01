/**
 * Oppgave 2
 *
 * Del 1:
 * Denne komponenten innholder en bug! Den må du fikse (uten å bruke hooks)
 *
 * Del 2:
 * Gjør om komponenten til å bruke useState (lagre person) og useEffect (fetch person)
 */

import React, { Component } from 'react';

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

function getPersonUrl(personId) {
  return `https://swapi.co/api/people/${personId}/`;
}

export default class Oppg2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: null,
    };
  }

  componentDidMount() {
    this.fetchPerson();
  }

  fetchPerson = () => {
    const { personId } = this.props;

    const url = getPersonUrl(personId);
    fetch(url)
      .then(result => result.json())
      .then(json => {
        this.setState({ person: json });
      });
  };

  render() {
    const { person } = this.state;

    if (!person) {
      return <div>Laster...</div>;
    }

    return (
      <table>
        <tbody>
          <Row label="Navn" value={person.name} />
          <Row label="Født" value={person.birth_year} />
          <Row label="Øyne" value={person.eye_color} />
          <Row label="Kjønn" value={person.gender} />
          <Row label="Hår" value={person.hair_color} />
          <Row label="Høyde" value={person.height} />
          <Row label="Vekt" value={person.mass} />
        </tbody>
      </table>
    );
  }
}
