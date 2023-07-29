import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
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
