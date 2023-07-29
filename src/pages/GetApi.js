import axios from "axios";
import React from "react";
import Loading from "../components/Loading";
import { useContext } from "react";
import { ContextData } from "../config/Context";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function GetApi() {
  const { loading, phpData, inputDataPhp, setInputDataPhp } =
    useContext(ContextData);

  let link = useNavigate();
  const handleEdit = (item) => {
    // console.log(item);
    setInputDataPhp(item);
    link("/form_add_php");
  };

  return (
    <div className="getApi">
      <Loading load={loading} />
      <table border={1}>
        <thead>
          <tr>
            <th>№</th>
            <th>title_uz</th>
            <th>title_ru</th>
            <th>title_en</th>
            <th>body_uz</th>
            <th>body_ru</th>
            <th>body_en</th>
            <th>photo</th>
            <th colSpan={2}>action</th>
          </tr>
        </thead>
        <tbody>
          {phpData?.length > 0 ? (
            phpData?.map((c, index) => {
              return (
                <tr key={c.id}>
                  <th> {index + 1} </th>
                  <td> {c?.title_uz} </td>
                  <td> {c?.title_ru} </td>
                  <td> {c?.title_en} </td>
                  <td> {c?.body_uz} </td>
                  <td> {c?.body_ru} </td>
                  <td> {c?.body_en} </td>
                  <td>
                    <img src={c?.photo} alt={c?.title_uz} />
                  </td>
                  <td>
                    <Button
                      color="secondary"
                      variant="contained"
                      onClick={() => handleEdit(c)}
                    >
                      edit
                    </Button>
                  </td>
                  <td>
                    <Button color="error" variant="contained">
                      delete
                    </Button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <th> No data... </th>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
