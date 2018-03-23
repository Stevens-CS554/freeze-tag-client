import React, { Component } from "react";
import player1 from "../../assets/avatar-1.svg";
import player2 from "../../assets/avatar-2.svg";
import player3 from "../../assets/avatar-3.svg";
import player4 from "../../assets/avatar-4.svg";

class Avatar extends Component {
  getSrcFromAvatar(id) {
    if (id === 1) return player1;
    if (id === 2) return player2;
    if (id === 3) return player3;
    if (id === 4) return player4;

    return null;
  }
  render() {
    const src = this.getSrcFromAvatar(this.props.avatar);
    if (!src) return null;

    return (
      <img
        src={src}
        className="avatar img-thumbnail img-responsive"
        alt="Avatar"
      />
    );
  }
}

export default Avatar;
