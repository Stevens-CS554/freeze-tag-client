import React from "react";

function GameTile({ x, y, user }) {
  const className = `gameboard-tile x-${x} y-${y}`;

  return (
    <div>
      <div className={className}>{user.name}</div>
    </div>
  );
}

export default GameTile;
