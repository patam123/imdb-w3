import React, { Component } from "react";
import "./styling/App.css";
import Card from "./components/card";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IMDB ACTORS</h1>
        <Card />
      </div>
    );
  }
}

export default App;
