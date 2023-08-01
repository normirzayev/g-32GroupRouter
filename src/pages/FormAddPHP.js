import React, { useContext } from "react";
import { ContextData } from "../config/Context";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "../components/Loading";

export default function FormAddPHP() {
  let link = useNavigate();
  const {
    inputDataPhp,
    setInputDataPhp,
    setLoading,
    loading,
    setPhpData,
    phpData,
    clearInputinputDataPhp,
  } = useContext(ContextData);
  const getIntputValue = (e) => {
    setInputDataPhp({
      ...inputDataPhp,
      [e.target.name]: e.target.value,
    });
  };
  const sendData = async (e) => {
    setLoading(true);
    e.preventDefault();
    let formData = new FormData();
    formData.append("title_uz", inputDataPhp.title_uz);
    formData.append("title_ru", inputDataPhp.title_ru);
    formData.append("title_en", inputDataPhp.title_en);
    formData.append("body_uz", inputDataPhp.body_uz);
    formData.append("body_ru", inputDataPhp.body_ru);
    formData.append("body_en", inputDataPhp.body_en);
    if (inputDataPhp?.photoLink?.length > 0) {
      formData.append("photo", inputDataPhp.photo);
    }
    if (setInputDataPhp.id === "") {
      let jsonData = await axios(
        "http://test-api.nammqial.uz/public/api/news",
        { method: "post", data: formData }
      );
      try {
        if (jsonData.status === 200) {
          setPhpData([...phpData, jsonData.data.data]);
          link("/get_api");
          clearInputinputDataPhp();
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    } else {
      let jsonData = await axios(
        `http://test-api.nammqial.uz/public/api/news/${inputDataPhp?.id}`,
        { method: "post", data: formData }
      );
      try {
        if (jsonData.status === 200) {
          setPhpData(
            phpData.map((item) =>
              item.id === inputDataPhp.id ? jsonData?.data?.data : item
            )
          );
          link("/get_api");
          clearInputinputDataPhp();
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
  };
  return (
    <>
      <Loading load={loading} />
      <form onSubmit={sendData}>
        <div>
          <h1>LocalStorage </h1>
        </div>
        <div className="inputs">
          <div className="inputGroup">
            <TextField
              id="filled-"
              name="title_uz"
              label="title_uz"
              variant="filled"
              fullWidth
              onChange={getIntputValue}
              value={inputDataPhp?.title_uz}
            />
          </div>
          <div className="inputGroup">
            <TextField
              id="filled-"
              label="title_ru"
              name="title_ru"
              variant="filled"
              fullWidth
              onChange={getIntputValue}
              value={inputDataPhp?.title_ru}
            />
          </div>
          <div className="inputGroup">
            <TextField
              id="filled-"
              label="title_en"
              variant="filled"
              name="title_en"
              fullWidth
              onChange={getIntputValue}
              value={inputDataPhp?.title_en}
            />
          </div>
          <div className="inputGroup">
            <TextField
              id="filled-"
              label="body_uz"
              variant="filled"
              name="body_uz"
              fullWidth
              onChange={getIntputValue}
              value={inputDataPhp?.body_uz}
            />
          </div>
          <div className="inputGroup">
            <TextField
              id="filled-"
              label="body_ru"
              variant="filled"
              name="body_ru"
              fullWidth
              onChange={getIntputValue}
              value={inputDataPhp?.body_ru}
            />
          </div>
          <div className="inputGroup">
            <TextField
              id="filled-"
              label="body_en"
              variant="filled"
              name="body_en"
              fullWidth
              onChange={getIntputValue}
              value={inputDataPhp?.body_en}
            />
          </div>
          <div className="inputGroup">
            <input
              type="file"
              onChange={(e) =>
                setInputDataPhp({
                  ...inputDataPhp,
                  photo: e.target.files[0],
                  photoLink: URL.createObjectURL(e.target.files[0]),
                })
              }
            />
            {inputDataPhp.photoLink.length > 0 ? (
              <img src={inputDataPhp?.photoLink} alt="" />
            ) : (
              ""
            )}
          </div>
        </div>
        <div>
          <Button variant="contained" type="submit">
            {inputDataPhp.id === "" ? "Send" : "Edit"}
          </Button>
        </div>
      </form>
    </>
  );
}
