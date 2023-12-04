import React from "react";
import fgomes from "./images/fgomespicture.png";
import Nav from "./Nav.js";
import Footer from "./Footer.js";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Nav />
        <br />
        <button className="btn btn-outline-primary">
          Hey, WELCOME to my Portfolio!!!
        </button>
        <h3> I am</h3>
        <h1>Fernanda Gomes</h1>
        <h2>
          <em>Front-end Developer </em> based in United Kingdom{" "}
        </h2>
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
