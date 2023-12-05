import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import "./App.css";

export default function Projects() {
  return (
    <div className="Projects">
      <div className="container">
        <Nav />

        <h1>Let's get in touch!</h1>
        <div className="text-center text-light lh-lg">
          <h3>Email </h3>
          <p>
            <a href="mailto:nandasthefany@hotmail.com">
              nandasthefany@hotmail.com
            </a>
          </p>
          <h3>LinkedIn</h3>
          <p>
            <a
              href="https://www.linkedin.com/in/fernanda-gomes-front-end-developer/"
              target="_blank"
              rel="noreferrer"
            >
              Fernanda Gomes
            </a>
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
}
