import { Button, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { ContextData } from "../config/Context";
import { useNavigate, useParams } from "react-router-dom";

export default function Home() {
  let { data, refreshData, inputData, setInputData, clearInputData } =
    useContext(ContextData);
  let navLink = useNavigate();

  let paramID = useParams();
  // console.log(paramID.id);
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
    if (inputData.id === "") {
      localStorage.setItem(
        "data",
        JSON.stringify([...data, { ...inputData, id: Date.now() }])
      );
    } else {
      // tahrirlash
      localStorage.setItem(
        "data",
        JSON.stringify(
          data.map((item) => (item.id === inputData.id ? inputData : item))
        )
      );
    }
    clearInputData();
    refreshData();
    navLink("/table");
  };

  useEffect(() => {
    if (paramID.id) {
      setInputData(data.filter((item) => item.id == paramID.id)[0]);
    }
  }, []);

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
          {inputData.id === "" ? "Send" : "Edit"}
        </Button>
      </div>
    </form>
  );
}
