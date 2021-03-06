import React, { Component } from "react";
import { connect } from "react-redux";
import { moveUser } from "../../store/actions/users";

class GameController extends Component {
  render() {
    const down =
      this.props.y > 1 ? (
        <button
          className="btn btn-primary"
          disabled={this.props.frozen}
          onClick={e => {
            e.preventDefault();
            this.props.moveUser("down");
          }}
        >
          Down
        </button>
      ) : null;

    const up =
      this.props.y < 10 ? (
        <button
          className="btn btn-primary"
          disabled={this.props.frozen}
          onClick={e => {
            e.preventDefault();
            this.props.moveUser("up");
          }}
        >
          Up
        </button>
      ) : null;

    const left =
      this.props.x > 1 ? (
        <button
          className="btn btn-primary"
          disabled={this.props.frozen}
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
          disabled={this.props.frozen}
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
          {up} {right} {down} {left}
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
    return { x: null, y: null, frozen: true };
  }

  return {
    frozen: userEntry.frozen,
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
