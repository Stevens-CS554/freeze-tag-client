import React, { Component } from "react";
import { connect } from "react-redux";
import GameLogin from "./GameLogin";
import ChatroomContainer from "../Chatroom/ChatroomContainer";

class GameContainer extends Component {
  render() {
    if (this.props.currentUserId) {
      return (
        <div className="row">
          <div className="col-sm-3">
            <ChatroomContainer />
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

GameContainer = connect(mapStateToProps)(GameContainer);

export default GameContainer;
