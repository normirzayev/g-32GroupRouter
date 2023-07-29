import Home from "../pages/Home";
import Setting from "../pages/Setting";
import Contact from "../pages/Contact";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Galary from "../pages/Galary";
import NotFound from "./NotFound";
import LocalTable from "../pages/Table";
import GetApi from "../pages/GetApi";
import FormAddPHP from "../pages/FormAddPHP";
export default function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Home />} />
      <Route path="/table" element={<LocalTable />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/setting/:nom" element={<Setting />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/galary" element={<Galary />} />
      <Route path="/get_api" element={<GetApi />} />
      <Route path="/form_add_php" element={<FormAddPHP />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
