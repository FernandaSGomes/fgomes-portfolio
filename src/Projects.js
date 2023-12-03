import React from "react";
import fgomes from "./images/fgomespicture.png";
import purpleBrand from "./images/purpleBrand.png";
import "./App.css";

export default function Projects() {
  return (
    <div className="App">
      <div className="container">
        <nav
          class="navbar  bg-dark navbar-expand-lg bg-body-tertiary"
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
                  <a class="nav-link active" href="/">
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
        <h3></h3>
        <h3> I am</h3>
        <h1>About me</h1>
        <h2>I am Fernanda Gomes</h2>
        <p>
          <strong>Front-end Developer</strong> for curiosity I discovered a
          passion for code
        </p>
        <p>
          I born in Minas Gerais, Brazil, I lived in Portugal for more than 10
          years, today I am based in United Kingdom. I love travel, I have been
          in more than 10 countries. I love do creatif things, play intrumens,
          to do social works.
        </p>
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
            href="https://github.com/FernandaSGomes/fernanda-gomes-portfolio"
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
