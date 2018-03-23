import React, { Component } from "react";
import Avatar from "./Avatar";

class AvatarSelector extends Component {
  render() {
    const listing = [0, 0, 0, 0].map((x, index) => {
      return (
        <div
          key={index}
          className="col-sm-3"
          onClick={e => {
            this.props.onSelect(index + 1);
          }}
        >
          <Avatar avatar={index + 1} />
        </div>
      );
    });

    return <div className="row">{listing}</div>;
  }
}

export default AvatarSelector;
