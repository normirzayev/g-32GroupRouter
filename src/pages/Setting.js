import React from "react";
import { useParams } from "react-router-dom";
export default function Setting() {
  let name = useParams();
  console.log(name);

  return (
    <div>
      <h1>setting</h1>
    </div>
  );
}
