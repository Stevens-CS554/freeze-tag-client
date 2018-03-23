import { AVATAR_SET, USERNAME_SET, USERID_SET } from "../constants";
import uuid from "uuid";

export const enterGame = () => {
  return dispatch => {
    dispatch({
      type: USERID_SET,
      id: uuid.v4()
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

export const usernameSet = name => {
  return dispatch => {
    dispatch({
      type: USERNAME_SET,
      name
    });
  };
};
