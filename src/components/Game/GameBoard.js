import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers } from "../../store/actions/users";
import GameTile from "./GameTile";

import "./GameBoard.css";

class GameBoard extends Component {
  render() {
    return (
      <div className="gameboard">
        {this.props.users.map(user => (
          <GameTile key={user.id} user={user} x={user.x} y={user.y} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users.users
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

GameBoard = connect(mapStateToProps, mapDispatchToProps)(GameBoard);

export default GameBoard;
