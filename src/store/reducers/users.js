import {
  AVATAR_SET,
  USERNAME_SET,
  USERID_SET,
  USER_JOINED
} from "../constants";

const initialState = {
  currentUser: {
    name: "",
    avatar: 0,
    id: null
  },
  users: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AVATAR_SET:
      return {
        ...state,
        currentUser: { ...state.currentUser, avatar: action.avatarId }
      };

    case USERNAME_SET:
      return {
        ...state,
        currentUser: { ...state.currentUser, name: action.name }
      };

    case USERID_SET: {
      return {
        ...state,
        currentUser: { ...state.currentUser, id: action.id }
      };
    }

    case USER_JOINED: {
      return {
        ...state,
        users: [...state.users, action.user]
      };
    }

    default:
      return state;
  }
};
