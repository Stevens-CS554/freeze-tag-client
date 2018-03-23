import store from "../store";
import io from "socket.io-client";
import { userJoined } from "../store/actions/users";

let socket = null;
const dispatch = store.dispatch;
const getState = store.getState;

export const openConnection = () => {
  return new Promise((resolve, reject) => {
    socket = io("http://localhost:8080/freeze-tag");

    socket.on("player-joined", data => {
      dispatch(userJoined(data));
    });

    socket.on("connect", resolve);
  });
};

export const joinGame = () => {
  const currentUser = getState().users.currentUser;
  socket.emit("join", currentUser);
};
