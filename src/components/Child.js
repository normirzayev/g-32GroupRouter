import React, { useContext } from "react";
import { ContextData } from "../config/Context";

export default function Child() {
  let { text } = useContext(ContextData);

  return (
    <div>
      <h1> {text} </h1>
    </div>
  );
}
