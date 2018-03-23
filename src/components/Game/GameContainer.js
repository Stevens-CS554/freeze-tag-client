import React, { Component } from "react";
import { connect } from "react-redux";
import GameLogin from "./GameLogin";

class GameContainer extends Component {
  render() {
    if (this.props.currentUserId) {
      return <div>Game goes here</div>;
    }

    return <GameLogin />;
  }
}

const mapStateToProps = state => {
  return {
    currentUserId: state.users.currentUser.id
  };
};

GameContainer = connect(mapStateToProps)(GameContainer);

export default GameContainer;
