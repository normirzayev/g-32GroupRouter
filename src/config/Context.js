import React, { createContext, useState } from "react";
export const ContextData = createContext();
export default function ContextProvider({ children }) {
  const [jsonData, setJsonData] = useState([]);
  const [phpData, setPhpData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("data")) || []
  );
  const refreshData = () => {
    setData(JSON.parse(localStorage.getItem("data")) || []);
  };
  const [inputData, setInputData] = useState({
    id: "",
    name: "",
    userName: "",
    password: "",
    email: "",
  });
  const clearInputData = () => {
    setInputData({
      id: "",
      name: "",
      userName: "",
      password: "",
      email: "",
    });
  };

  const [inputDataPhp, setInputDataPhp] = useState({
    id: "",
    title_uz: "",
    title_ru: "",
    title_en: "",
    body_uz: "",
    body_ru: "",
    body_en: "",
    photo: "",
  });
  const clearInputinputDataPhp = () => {
    setInputDataPhp({
      id: "",
      title_uz: "",
      title_ru: "",
      title_en: "",
      body_uz: "",
      body_ru: "",
      body_en: "",
      photo: "",
    });
  };

  return (
    <ContextData.Provider
      value={{
        data,
        setData,
        refreshData,
        inputData,
        setInputData,
        clearInputData,
        jsonData,
        loading,
        setLoading,
        setJsonData,
        phpData,
        setPhpData,
        inputDataPhp,
        setInputDataPhp,
        clearInputinputDataPhp,
      }}
    >
      {children}
    </ContextData.Provider>
  );
}
