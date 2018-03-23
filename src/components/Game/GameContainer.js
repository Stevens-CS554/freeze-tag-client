import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers } from "../../store/actions/users";

import ChatroomContainer from "../Chatroom/ChatroomContainer";

class GameContainer extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-3">
          <ChatroomContainer />
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
