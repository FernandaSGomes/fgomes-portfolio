import React from "react";
import fgomes from "./images/fgomespicture.png";
import Nav from "./Nav";
import Footer from "./Footer";
import "./App.css";

export default function About() {
  return (
    <div className="About">
      <div className="container">
        <Nav />
        <h1>About me</h1>
        <div className="about-text text-light">
          {" "}
          <h2>I'm Fernanda Gomes</h2>
          <p>
            <strong>
              Front-end Developer Out of curiosity I discovered a passion for
              code 🤍
            </strong>
          </p>
          <p>
            {" "}
            I was born in Minas Gerais, Brazil, lived in Portugal for over 10
            years and today I am based in the United Kingdom. I love code, I
            love creating new things, I love traveling, I've been to more than
            10 countries. I like playing instruments, doing social activities. I
            heard a lot of things about this career, At first it seemed like a
            big challenge, I started to make one small course, then another and
            another, then I realized that all things are possible, we just need
            to believe and have discipline, and of course with the support of
            the people that You love everything becomes easier, so today I'm
            here presenting You my portfolio.
          </p>
        </div>

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
