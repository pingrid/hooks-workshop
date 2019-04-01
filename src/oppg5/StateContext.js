import React, { createContext, useState } from 'react';

export const StateContext = createContext();

export function StateProvider({ children }) {
  const [state, setState] = useState('');

  return (
    <StateContext.Provider value={[state, setState]}>
      {children}
    </StateContext.Provider>
  );
}
