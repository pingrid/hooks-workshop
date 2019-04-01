import React, { useState, useEffect } from "react";
import "./App.css";

import Oppg1 from "./oppg1/Oppg1";
import Oppg2 from "./oppg2";
import Oppg3 from "./oppg3";
import Oppg4 from "./oppg4/Oppg4";

import Hemmelig from "./oppg4/Hemmelig";

import { StateProvider } from "./oppg4/StateContext";

function getContent(page) {
  switch (page) {
    case "":
      return (
        <div>
          <h1>Vælkømmen til hooks!</h1>
          :)
        </div>
      );
    case "oppg1":
      return <Oppg1 />;
    case "oppg2":
      return <Oppg2 />;
    case "oppg3":
      return <Oppg3 />;
    case "oppg4":
      return <Oppg4 />;
    default:
      return <div>Not found</div>;
  }
}

function App() {
  const [page, setPage] = useState(window.location.pathname.substring(1));

  /**
   * Oppgave 3b (optional)
   *
   * Lag en custom hook som viser page-navnet i document.title
   */

  useEffect(() => {
    window.history.pushState(null, page, page);
  }, [page]);

  function handlePageChange(event, page) {
    event.preventDefault();
    setPage(page);
  }

  return (
    <StateProvider initialValue={""}>
      <div className="App">
        <header>
          <a href="/" onClick={event => handlePageChange(event, "")}>
            Hjem
          </a>
          <a href="oppg1" onClick={event => handlePageChange(event, "oppg1")}>
            Oppgave 1
          </a>
          <a href="oppg2" onClick={event => handlePageChange(event, "oppg2")}>
            Oppgave 2
          </a>
          <a href="oppg3" onClick={event => handlePageChange(event, "oppg3")}>
            Oppgave 3
          </a>
          <a href="oppg4" onClick={event => handlePageChange(event, "oppg4")}>
            Oppgave 4
          </a>
        </header>

        <div className="App-content">{getContent(page)}</div>

        <Hemmelig />
      </div>
    </StateProvider>
  );
}

export default App;
