import React from 'react';

function Header({ currentPath, handlePageChange }) {
  return (
    <header>
      <a href="/" onClick={handlePageChange}>
        Hjem
      </a>
      <a href="/oppg1" onClick={handlePageChange}>
        Oppgave 1
      </a>
      <a href="/oppg2" onClick={handlePageChange}>
        Oppgave 2
      </a>
      <a href="/oppg3" onClick={handlePageChange}>
        Oppgave 3
      </a>
      <a href="/oppg4" onClick={handlePageChange}>
        Oppgave 4
      </a>
      <a href="/oppg5" onClick={handlePageChange}>
        Oppgave 5
      </a>
      {['/oppg5', '/oppg6'].includes(currentPath) && (
        <a href="/oppg6" onClick={handlePageChange}>
          Oppgave 6
        </a>
      )}
    </header>
  );
}

export default Header;
