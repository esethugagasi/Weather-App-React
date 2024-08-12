import React, { Component } from "react";
// import logo from "./logo.svg";
import Weather from "./Weather";
import axios from "axios";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Welcome to React</h1>
          <Weather city="Paris" />
        </div>
      </div>
    );
  }
}

export default App;
