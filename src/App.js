import "./App.css";
import Search from "./Search";
import React from "react";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Search />
        <a href="https://github.com/jrose53/meteo-app"> Github</a>
      </header>
    </div>
  );
}

export default App;
