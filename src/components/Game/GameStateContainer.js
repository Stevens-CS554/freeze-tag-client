import React, { Component } from "react";
import { connect } from "react-redux";
import GameLogin from "./GameLogin";
import GameContainer from "./GameContainer";

class GameStateContainer extends Component {
  render() {
    if (this.props.currentUserId) {
      return (
        <div className="row">
          <div className="col-sm-3">
            <GameContainer />
          </div>
        </div>
      );
    }

    return <GameLogin />;
  }
}

const mapStateToProps = state => {
  return {
    currentUserId: state.users.currentUser.id
  };
};

GameStateContainer = connect(mapStateToProps)(GameStateContainer);

export default GameStateContainer;
