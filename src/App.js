import React from 'react';
import './App.css';
import useRouter from './useRouter';
import Header from './Header';
import Hemmelig from './oppg5/Hemmelig';
import { StateProvider } from './oppg5/StateContext';

function App() {
  const [currentRoute, handlePageChange] = useRouter();

  /**
   * Oppgave 3b (ekstra)
   * Lag en custom hook som viser currentRoute.title i document.title
   */

  return (
    <StateProvider>
      <div className="App">
        <Header
          currentPath={currentRoute.path}
          handlePageChange={handlePageChange}
        />
        <div>{currentRoute.content}</div>
        <Hemmelig />
      </div>
    </StateProvider>
  );
}

export default App;
