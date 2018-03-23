import React, { Component } from "react";
import Avatar from "../Avatar/Avatar";
import { connect } from "react-redux";
import "./UserList.css";

class UserList extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-12 user-list">
          <h4>Current Users</h4>
          {this.props.users.map(user => {
            return (
              <div key={user.id} className="user">
                <Avatar avatar={user.avatar} />
                <h5>{user.name}</h5>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users.users
  };
};

UserList = connect(mapStateToProps)(UserList);

export default UserList;
