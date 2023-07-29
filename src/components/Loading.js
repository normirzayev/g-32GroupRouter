import React from "react";

export default function Loading({ load }) {
  return <div className={load ? "loading" : "loadingClose"}>Loading...</div>;
}
