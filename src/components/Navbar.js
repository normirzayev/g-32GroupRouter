import React from "react";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Form</NavLink>
        </li>
        <li>
          <NavLink to="/table"> Table </NavLink>
        </li>
        <li>
          <NavLink to="/setting">Setting</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/galary">galary</NavLink>
        </li>
        <li>
          <NavLink to="/get_api">get api</NavLink>
        </li>
        <li>
          <NavLink to="/form_add_php">form add php</NavLink>
        </li>
      </ul>
    </nav>
  );
}
