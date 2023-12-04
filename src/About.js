import React from "react";
import fgomes from "./images/fgomespicture.png";
import purpleBrand from "./images/purpleBrand.png";
import "./App.css";
import Nav from "./Nav";

export default function About() {
  return (
    <div className="App">
      <div className="container">
        <Nav />
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
