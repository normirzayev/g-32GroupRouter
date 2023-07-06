import React from "react";
import "./style.css";
import Navbar from "./components/Navbar";
import Pages from "./components/Pages";
import Footer from "./components/Footer";
export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Pages />
      <Footer />
    </div>
  );
}
