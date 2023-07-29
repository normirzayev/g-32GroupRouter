import React, { useContext } from "react";
import Loading from "../components/Loading";
import { ContextData } from "../config/Context";
export default function Galary() {
  let { jsonData, loading } = useContext(ContextData);
  console.log(jsonData);
  return (
    <>
      <Loading load={loading} />
      <div>
        {jsonData.map((obj) => {
          return (
            <div key={obj.id}>
              <h2>completed : {obj.completed ? "bajarildi" : "bajarilmadi"}</h2>
              <h1> title : {obj.title} </h1>;
            </div>
          );
        })}
      </div>
    </>
  );
}
