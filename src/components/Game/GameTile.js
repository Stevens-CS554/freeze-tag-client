import React from "react";
import Avatar from "../Avatar/Avatar";

function GameTile({ x, y, user }) {
  const className = `gameboard-tile x-${x} y-${y}`;

  return (
    <div>
      <div className={className}>
        <Avatar avatar={user.avatar} />
        {user.name}
      </div>
    </div>
  );
}

export default GameTile;
