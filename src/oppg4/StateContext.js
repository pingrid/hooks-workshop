import React, { createContext, useState } from "react";

export const StateContext = createContext();

export function StateProvider({ initialValue, children }) {
  const [state, setState] = useState(initialValue);

  return (
    <StateContext.Provider value={[state, setState]}>
      {children}
    </StateContext.Provider>
  );
}
