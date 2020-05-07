import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { render } from "@testing-library/react";

class App extends Component {
  state = {
    values: [],
  };
  componentDidMount() {
    this.setState({
      values: [
        { id: 1, name: "Values 101" },
        { id: 2, name: "Values 102" },
        { id: 3, name: "Values 103" },
      ],
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ul>
            {this.state.values.map((value: any) => (
              <li>
                {value.id} - {value.name} {"OKOK"}
              </li>
            ))}
          </ul>
        </header>
      </div>
    );
  }
}
export default App;
