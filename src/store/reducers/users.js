import {
  AVATAR_SET,
  USERNAME_SET,
  USERID_SET,
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
