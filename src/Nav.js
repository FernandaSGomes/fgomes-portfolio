import React from "react";
import purpleBrand from "./images/purpleBrand.png";

export default function Nav() {
  return (
    <nav
      className="navbar  bg-dark navbar-expand-lg bg-body-tertiary border border-white"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <span></span>
        <a className="navbar-brand" href="/">
          <img
            src={purpleBrand}
            alt="purpleBrand"
            className="purpleBrand d-none d-lg-block img-fluid rounded mb-2"
          />{" "}
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
