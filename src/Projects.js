import React from "react";
import fgomes from "./images/fgomespicture.png";
import Nav from "./Nav";
import Footer from "./Footer";
import "./App.css";

export default function Projects() {
  return (
    <div className="Projects">
      <div className="container">
        <Nav />

        <h1>Projects</h1>

        <img
          src={fgomes}
          alt="fgomes"
          className="picture d-none d-lg-block img-fluid rounded mb-2"
        />
        <Footer />
      </div>
    </div>
  );
}
