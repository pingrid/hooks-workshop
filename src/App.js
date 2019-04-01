import React from 'react';
import './App.css';
import useRouter from './useRouter';
import Header from './Header';
import Hemmelig from './oppg5/Hemmelig';
import { StateProvider } from './oppg5/StateContext';

function App() {
  const [currentPage, handlePageChange] = useRouter();

  /**
   * Oppgave 3b (ekstra)
   * Lag en custom hook som viser currentPage.title i document.title
   */

  return (
    <StateProvider>
      <div className="App">
        <Header
          currentPath={currentPage.path}
          handlePageChange={handlePageChange}
        />
        <div>{currentPage.content}</div>
        <Hemmelig />
      </div>
    </StateProvider>
  );
}

export default App;
