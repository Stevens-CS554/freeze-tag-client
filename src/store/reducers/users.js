import {
  AVATAR_SET,
  USERNAME_SET,
  USERID_SET,
  USERS_FROZEN,
  USER_JOINED,
  USER_MOVED,
  USER_LEFT,
  RECEIVED_USER_LIST
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

    case USER_LEFT: {
      return {
        ...state,
        users: [...state.users.filter(x => x.id !== action.userId)]
      };
    }

    case RECEIVED_USER_LIST: {
      return { ...state, users: [...state.users, ...action.users] };
    }

    case USERS_FROZEN: {
      return {
        ...state,
        users: state.users.map(user => {
          if (action.users.indexOf(user.id) < 0) return user;

          return { ...user, frozen: true };
        })
      };
    }

    case USER_MOVED: {
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id !== action.userId) return user;

          return { ...user, x: action.x, y: action.y };
        })
      };
    }
    default:
      return state;
  }
};
