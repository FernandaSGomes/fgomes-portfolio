import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>Fernanda Gomes</h1>
      <h2>Front-end Developer</h2>
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
  );
}
