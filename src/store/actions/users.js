import {
  AVATAR_SET,
  USERNAME_SET,
  USERID_SET,
  USER_JOINED,
  RECEIVED_USER_LIST
} from "../constants";
import uuid from "uuid";
import { fetchUserList } from "../../utilities/httpApi";
import { openConnection, joinGame } from "../../utilities/socketClient";

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
