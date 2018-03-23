import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers } from "../../store/actions/users";

import ChatroomContainer from "../Chatroom/ChatroomContainer";
import GameBoard from "./GameBoard";

class GameContainer extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <ChatroomContainer />
          <GameBoard />
        </div>
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

GameContainer = connect(mapStateToProps, mapDispatchToProps)(GameContainer);

export default GameContainer;
