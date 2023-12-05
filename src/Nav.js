import React from "react";
import purpleBrand from "./images/purpleBrand.png";
import "./App.css";

export default function Nav() {
  return (
    <nav
      class="navbar bg-dark navbar-expand-lg bg-body-tertiary fs-3 p-0"
      data-bs-theme="dark"
    >
      <div class="container-fluid ">
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
              <a class="nav-link" aria-current="page" href="/about">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/projects">
                Projects
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
