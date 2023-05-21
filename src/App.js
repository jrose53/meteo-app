import "./App.css";
import Search from "./Search";
import React from "react";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Search defaultCity="New York" />
        <footer>
          {" "}
          Coded by{" "}
          <a
            href="https://www.linkedin.com/in/juliette-rose1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Juliette Rose{" "}
          </a>{" "}
          - Open sourced on{" "}
          <a
            href="https://github.com/jrose53/meteo-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Github test
          </a>
        </footer>
      </div>
    </div>
  );
}
