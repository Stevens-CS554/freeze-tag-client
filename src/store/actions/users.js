import {
  AVATAR_SET,
  USERNAME_SET,
  MOVE_USER,
  USER_MOVED,
  USERID_SET,
  USER_JOINED,
  USER_LEFT,
  RECEIVED_USER_LIST
} from "../constants";
import uuid from "uuid";
import { fetchUserList } from "../../utilities/httpApi";
import {
  openConnection,
  joinGame,
  sendMoveUserCommand
} from "../../utilities/socketClient";

export const enterGame = () => {
  return async dispatch => {
    dispatch({
      type: USERID_SET,
      id: uuid.v4()
    });

    await openConnection();

    joinGame();
  };
};

export const userLeft = userId => {
  return dispatch => {
    dispatch({
      type: USER_LEFT,
      userId
    });
  };
};

export const userJoined = user => {
  return dispatch => {
    dispatch({
      type: USER_JOINED,
      user
    });
  };
};

export const avatarSet = avatarId => {
  return dispatch => {
    dispatch({
      type: AVATAR_SET,
      avatarId
    });
  };
};

export const getUsers = () => {
  return async dispatch => {
    const users = await fetchUserList();

    dispatch({
      type: RECEIVED_USER_LIST,
      users
    });
  };
};

export const usernameSet = name => {
  return dispatch => {
    dispatch({
      type: USERNAME_SET,
      name
    });
  };
};

export const moveUser = direction => {
  return dispatch => {
    sendMoveUserCommand(direction);
  };
};

export const userMoved = (userId, x, y) => {
  return dispatch => {
    dispatch({
      type: USER_MOVED,
      userId,
      y,
      x
    });
  };
};
