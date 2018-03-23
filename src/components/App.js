import React, { Component } from "react";
import GameStateContainer from "./Game/GameStateContainer";

class App extends Component {
  render() {
    return (
      <div className="container">
        <header className="jumbotron">
          <h1>Welcome to Freeze-Tag</h1>
          <p>
            Are you ready for the most amazing game in the world, freeze tag?
          </p>
        </header>
        <GameStateContainer />
      </div>
    );
  }
}

export default App;
