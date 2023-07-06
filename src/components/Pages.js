import Home from "../pages/Home";
import About from "../pages/About";
import Setting from "../pages/Setting";
import Contact from "../pages/Contact";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Galary from "../pages/Galary";
export default function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/galary" element={<Galary />} />
    </Routes>
  );
}
