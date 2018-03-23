import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers } from "../../store/actions/users";
import "./GameBoard.css";

class GameBoard extends Component {
  render() {
    return (
      <div className="gameboard">
        <div className="gameboard-tile x-1 y-1">Hello</div>
        <div className="gameboard-tile x-10 y-10">Hello</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUserId: state.users.currentUser.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => {
      dispatch(getUsers());
    }
  };
};

GameBoard = connect(mapStateToProps, mapDispatchToProps)(GameBoard);

export default GameBoard;
