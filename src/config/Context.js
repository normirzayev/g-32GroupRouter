import React, { createContext } from "react";

export const ContextData = createContext();

export default function ContextProvider({ children }) {

  let text = 'salom'

  return <ContextData.Provider value={{text}} >{children}</ContextData.Provider>;
}
