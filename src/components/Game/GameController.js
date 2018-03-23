import React, { Component } from "react";
import { connect } from "react-redux";
import { moveUser } from "../../store/actions/users";

class GameController extends Component {
  render() {
    const left =
      this.props.x > 1 ? (
        <button
          className="btn btn-primary"
          onClick={e => {
            e.preventDefault();
            this.props.moveUser("left");
          }}
        >
          Left
        </button>
      ) : null;

    const right =
      this.props.x < 10 ? (
        <button
          className="btn btn-primary"
          onClick={e => {
            e.preventDefault();
            this.props.moveUser("right");
          }}
        >
          Right
        </button>
      ) : null;

    return (
      <div className="row">
        <div className="col-sm-12">
          <p className="help-text">
            Currently at {this.props.x}, {this.props.y}
          </p>
          {left} {right}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const userEntry = state.users.users.filter(
    x => x.id === state.users.currentUser.id
  )[0];

  if (!userEntry) {
    return { x: 0, y: 0 };
  }

  return {
    x: userEntry.x,
    y: userEntry.y
  };
};

const mapDispatchToProps = dispatch => {
  return {
    moveUser: direction => {
      dispatch(moveUser(direction));
    }
  };
};

GameController = connect(mapStateToProps, mapDispatchToProps)(GameController);

export default GameController;
