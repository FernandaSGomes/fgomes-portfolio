import React from "react";
import fgomes from "./images/fgomespicture.png";
import purpleBrand from "./images/purpleBrand.png";
import About from "./About.js";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <nav
          class="navbar  bg-dark navbar-expand-lg bg-body-tertiary border border-white"
          data-bs-theme="dark"
        >
          <div class="container-fluid">
            <span></span>
            <a class="navbar-brand" href="/">
              <img
                src={purpleBrand}
                alt="purpleBrand"
                className="purpleBrand d-none d-lg-block img-fluid rounded mb-2"
              />{" "}
            </a>

            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" href="/">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " aria-current="page" href="/">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/">
                    Projects
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>{" "}
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
        <footer>
          This project was coded by
          <a
            href="www.linkedin.com/in/fernanda-gomes-front-end-developer"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Fernanda Gomes
          </a>{" "}
          and is open-source on{" "}
          <a
            href="https://github.com/FernandaSGomes/fgomes-portfolio"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
