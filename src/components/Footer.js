import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <Link to="/"> home</Link>
        </li>
        <li>
          <Link to="/galary">galary </Link>
        </li>
      </ul>
    </footer>
  );
}
