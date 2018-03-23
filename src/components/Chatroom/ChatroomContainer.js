import React, { Component } from "react";
import { connect } from "react-redux";
import UserList from "../Users/UserList";

class ChatroomContainer extends Component {
  render() {
    if (!this.props.currentUser) {
      return (
        <div>You got here without logging in! Very hacker! Much 1337!</div>
      );
    }

    return (
      <div>
        <UserList />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.users.currentUser
  };
};

ChatroomContainer = connect(mapStateToProps)(ChatroomContainer);

export default ChatroomContainer;
