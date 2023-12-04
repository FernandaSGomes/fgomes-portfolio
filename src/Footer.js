import React, { useState, useEffect } from "react";
import purpleBrand from "./images/purpleBrand.png";
import "./App.css";
export default function Footer() {
  return (
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
  );
}
