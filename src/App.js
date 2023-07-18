import React from "react";
import "./style.css";
import Navbar from "./components/Navbar";
import Pages from "./components/Pages";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import Footer from "./components/Footer";
export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Pages />
      {/* <Footer /> */}
    </div>
  );
}
