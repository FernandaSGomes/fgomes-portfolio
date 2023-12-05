import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      This project was coded by
      <a
        href="https://www.linkedin.com/in/fernanda-gomes-front-end-developer/"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        Fernanda Gomes
      </a>{" "}
      and is open-source on{" "}
      <a
        href="https://github.com/FernandaSGomes/fgomes-portfolio"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        GitHub
      </a>
    </footer>
  );
}
