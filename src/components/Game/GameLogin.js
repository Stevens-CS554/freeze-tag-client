import React, { Component } from "react";
import { avatarSet, usernameSet, enterGame } from "../../store/actions/users";
import AvatarSelector from "../Avatar/AvatarSelector";
import Avatar from "../Avatar/Avatar";

import { connect } from "react-redux";

class GameLogin extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-8">
          <h2>Player Profile</h2>
          <form
            className="form-horizontal"
            onSubmit={e => {
              e.preventDefault();
              if (
                this.props.currentUser.avatar !== 0 &&
                this.props.currentUser.name
              ) {
                this.props.enterGame();
              }
            }}
          >
            <div className="form-group">
              <label htmlFor="username" className="col-sm-2 control-label">
                Username
              </label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  id="username"
                  placeholder="username"
                  type="text"
                  onChange={e => {
                    this.props.onUsernameChanged(e.target.value);
                  }}
                  value={this.props.currentUser.name}
                />
                <span className="help-block">
                  This will be your username for Freeze Tag -- make sure to name
                  it something 1337 to show how cool you are!
                </span>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="avatar" className="col-sm-2 control-label">
                Avatar
              </label>
              <div className="col-sm-10" id="avatar">
                <AvatarSelector
                  onSelect={avatar => this.props.onAvatarSelected(avatar)}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button
                  type="submit"
                  className="btn btn-default"
                  disabled={
                    this.props.currentUser.avatar === 0 ||
                    !this.props.currentUser.name
                  }
                >
                  Start Game
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-sm-3 col-sm-offset-1">
          <h2>Preview...</h2>
          <h3>{this.props.currentUser.name}</h3>
          <Avatar avatar={this.props.currentUser.avatar} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.users.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onUsernameChanged: newUsername => {
      dispatch(usernameSet(newUsername));
    },
    onAvatarSelected: avatarId => {
      dispatch(avatarSet(avatarId));
    },
    enterGame: () => {
      dispatch(enterGame());
    }
  };
};

GameLogin = connect(mapStateToProps, mapDispatchToProps)(GameLogin);

export default GameLogin;
