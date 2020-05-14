import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { cars } from "./demo";
import CarItem from "./CarItem";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          {cars.map((car) => (
            <li>
              <CarItem car={car} />
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
};
export default App;
