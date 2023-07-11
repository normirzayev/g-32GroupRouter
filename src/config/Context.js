import React, { createContext, useContext, useState } from "react";

export const ContextData = createContext();

export default function ContextProvider({ children }) {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("data")) || []
  );
  const refreshData = () => {
    setData(JSON.parse(localStorage.getItem("data")) || []);
  };
  return (
    <ContextData.Provider value={{ data, setData,refreshData }}>
      {children}
    </ContextData.Provider>
  );
}
