import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import "./App.css";
import resume from "./images/resume.png";

export default function Cv() {
  return (
    <div className="cv">
      <div className="container">
        <Nav />
        <h1>Resume</h1>
        <img
          src={resume}
          alt="resume"
          className="resume d-none d-lg-block img-fluid rounded mb-2
          "
        />
        <Footer />
      </div>
    </div>
  );
}
