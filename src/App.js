import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/oluwaseun-newton-m-d-mpa-3071b871/"
            target="-blank"
          >
            Oluwaseun Newton
          </a>{" "}
          and it is
          <a
            href="https://github.com/OluwaseunNewton/react-weather-app"
            target="-blank"
          >
            {" "}
            Open Sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
