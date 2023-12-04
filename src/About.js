import React from "react";
import fgomes from "./images/fgomespicture.png";
import Nav from "./Nav";
import Footer from "./Footer";
import "./App.css";

export default function About() {
  return (
    <div className="App">
      <div className="container">
        <Nav />
        <h1>About me</h1>
        <h2>I am Fernanda Gomes</h2>
        <p>
          <strong>Front-end Developer</strong> for curiosity I discovered a
          passion for code
        </p>
        <p>
          I born in Minas Gerais, Brazil, I lived in Portugal for more than 10
          years, today I am based in United Kingdom. I love travel, I have been
          in more than 10 countries. I love do creatif things, play intruments,
          to do social works.
        </p>
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
