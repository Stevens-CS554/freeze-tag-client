import {
  AVATAR_SET,
  USERNAME_SET,
  USERID_SET,
  USER_JOINED
} from "../constants";
import uuid from "uuid";

export const enterGame = () => {
  return (dispatch, getState) => {
    const state = getState();

    dispatch({
      type: USERID_SET,
      id: uuid.v4()
    });

    setTimeout(function() {
      // Temporary! We'll get this from sockets soon!
      dispatch({
        type: USER_JOINED,
        user: state.users.currentUser
      });
    }, 0);
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
