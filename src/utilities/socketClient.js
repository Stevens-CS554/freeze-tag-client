import { API_URL } from "../store/constants";
import store from "../store";
import io from "socket.io-client";
import { userJoined, userLeft, userMoved, usersFrozen } from "../store/actions/users";

let socket = null;
const dispatch = store.dispatch;
const getState = store.getState;

export const openConnection = () => {
  return new Promise((resolve, reject) => {
    socket = io(`${API_URL}/freeze-tag`);

    socket.on("player-joined", user => {
      dispatch(userJoined(user));
    });

    socket.on("player-left", userId => {
      dispatch(userLeft(userId));
    });

    socket.on("player-moved", moveData => {
      dispatch(userMoved(moveData.userId, moveData.x, moveData.y));
    });

    socket.on("players-frozen", frozenPlayers => {
      dispatch(usersFrozen(frozenPlayers));
    });

    socket.on("connect", resolve);
  });
};

export const joinGame = () => {
  const currentUser = getState().users.currentUser;
  socket.emit("join", currentUser);
};

export const sendMoveUserCommand = direction => {
  socket.emit("move", direction);
};
