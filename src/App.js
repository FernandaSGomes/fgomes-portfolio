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
        <div className="text-center">
          <button className="btn btn-outline-primary btn-lg fs-3 fw-bolder mt-4">
            WELCOME to my Portfolio!!
          </button>
        </div>
        <h1> Hey, I'm Fernanda Gomes</h1>

        <h2 className="text-center text-light">
          <em>FRONT-END DEVELOPER</em>
          <div> 🇬🇧 based in United Kingdom 🇬🇧 </div>
        </h2>
        <br />
        <div className="text-center">
          <div className="box  ">
            <div className="inner">
              <span>Hello World I'm Fernanda</span>
            </div>
            <div className="inner">
              <span>Hello World I'm Fernanda</span>
            </div>
          </div>
        </div>
        <img
          src={fgomes}
          alt="fgomes"
          className="picture d-none d-lg-block img-fluid rounded mb-2"
        />
        <div className="text-center mb-5">
          <a className="resumeLink" href="/Cv">
            View my RESUME
          </a>
        </div>
        <Footer />
      </div>
    </div>
  );
}
