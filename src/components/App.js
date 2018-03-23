import React, { Component } from "react";
import GameContainer from "./Game/GameContainer";

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
        <GameContainer />
      </div>
    );
  }
}

export default App;
