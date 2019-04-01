import React, { useState, useEffect } from 'react';

import Oppg1 from './oppg1';
import Oppg2 from './oppg2';
import Oppg3 from './oppg3';
import Oppg4 from './oppg4';
import Oppg5 from './oppg5';
import Oppg6 from './oppg6';

const PAGES = {
  '/': {
    path: '/',
    title: 'Hjem',
    content: (
      <div>
        <h1>Vælkømmen til hooks!</h1>
        <div>:)</div>
      </div>
    ),
  },
  '/oppg1': {
    path: '/oppg1',
    title: 'Oppgave 1',
    content: <Oppg1 />,
  },
  '/oppg2': {
    path: '/oppg2',
    title: 'Oppgave 2',
    content: <Oppg2 />,
  },
  '/oppg3': {
    path: '/oppg3',
    title: 'Oppgave 3',
    content: <Oppg3 />,
  },
  '/oppg4': {
    path: '/oppg4',
    title: 'Oppgave 4',
    content: <Oppg4 />,
  },
  '/oppg5': {
    path: '/oppg5',
    title: 'Oppgave 5',
    content: <Oppg5 />,
  },
  '/oppg6': {
    path: '/oppg6',
    title: 'Oppgave 6',
    content: <Oppg6 />,
  },
};

function getPage(path) {
  return (
    PAGES[path] || {
      path,
      title: '404',
      content: <div>sry mækk, not found</div>,
    }
  );
}

function useRouter() {
  const [page, setPage] = useState(getPage(window.location.pathname));

  useEffect(() => {
    window.history.pushState(null, page.title, page.path);
  }, [page]);

  function handlePageChange(event) {
    event.preventDefault();
    setPage(getPage(event.target.pathname));
  }

  return [page, handlePageChange];
}

export default useRouter;
