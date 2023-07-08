import { Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { ContextData } from "../config/Context";
import { useNavigate } from "react-router-dom";

export default function Home() {
  let { data, refreshData } = useContext(ContextData);
  let navLink = useNavigate();
  const [inputData, setInputData] = useState({
    name: "",
    userName: "",
    password: "",
    email: "",
  });
  const clearInputData = () => {
    setInputData({
      name: "",
      userName: "",
      password: "",
      email: "",
    });
  };
  const getIntputValue = (e) => {
    console.log(e.target.name);
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const sendData = (e) => {
    e.preventDefault();
    // localStorage.setItem("data", JSON.stringify([inputData]));
    localStorage.setItem("data", JSON.stringify([...data, inputData]));
    clearInputData();
    refreshData();
    navLink("/table");
  };

  return (
    <form onSubmit={sendData}>
      <div>
        <h1>LocalStorage </h1>
      </div>
      <div className="inputs">
        <div className="inputGroup">
          <TextField
            id="filled-"
            name="name"
            label="name"
            variant="filled"
            fullWidth
            onChange={getIntputValue}
            value={inputData.name}
          />
        </div>
        <div className="inputGroup">
          <TextField
            id="filled-"
            label="userName"
            name="userName"
            variant="filled"
            fullWidth
            onChange={getIntputValue}
            value={inputData.userName}
          />
        </div>
        <div className="inputGroup">
          <TextField
            id="filled-"
            label="email"
            variant="filled"
            name="email"
            fullWidth
            onChange={getIntputValue}
            value={inputData.email}
          />
        </div>
        <div className="inputGroup">
          <TextField
            id="filled"
            label="password"
            variant="filled"
            name="password"
            fullWidth
            onChange={getIntputValue}
            value={inputData.password}
          />
        </div>
      </div>
      <div>
        <Button variant="contained" type="submit">
          Send
        </Button>
      </div>
    </form>
  );
}
