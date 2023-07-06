import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function NotFound() {
  let link = useNavigate();
  return (
    <div className="notFound">
      <h1>NotFound</h1>
      <div>
        {/* <button onClick={() => link("/")}> back to home </button> */}
        <Link to={"/"}> back to home </Link>
      </div>
    </div>
  );
}
