import React from "react";
import gibraltar from "./images/gibraltar.png";
import portugal from "./images/portugal.png";
import clock from "./images/clock.png";
import Nav from "./Nav";
import Footer from "./Footer";

import "./App.css";

export default function Projects() {
  return (
    <div className="Projects">
      <div className="container">
        <Nav />

        <h1>Projects</h1>
        <div className="row">
          <div className="col-sm-4 mb-3">
            <img
              src={gibraltar}
              alt="Gibraltar project"
              className="gibraltar d-none d-lg-block img-fluid rounded mb-2 p-2 border shadow-sm"
            />
          </div>
          <div className="col-sm-4 mb-3">
            <img
              src={portugal}
              alt="Portugal travel project"
              className="portugal d-none d-lg-block img-fluid rounded mb-2 p-2 border shadow-sm"
            />
          </div>
          <div className="col-sm-4 mb-3">
            <img
              src={clock}
              alt="World-clock project"
              className="clock d-none d-lg-block img-fluid rounded mb-2 p-2 border shadow-sm"
            />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
