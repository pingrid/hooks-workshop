/**
 * Oppgave 1
 *
 * Gjør om Oppg1-komponenten til å bli en function component
 * som bruker useState til å holde på counter-tilstanden
 */

import React, { Component } from "react";

export default class Oppg1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: props.defaultValue || 0
    };
  }

  handleUp = () => {
    this.setState(prevState => {
      return {
        counter: prevState.counter + 1
      };
    });
  };

  handleDown = () => {
    this.setState(prevState => {
      return {
        counter: prevState.counter - 1
      };
    });
  };

  render() {
    const { counter } = this.state;

    return (
      <div>
        <h1>Oppgave 1</h1>
        <button onClick={this.handleUp}>+</button>
        <div>Counter: {counter}</div>
        <button onClick={this.handleDown}>-</button>
      </div>
    );
  }
}