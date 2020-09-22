import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_FAILED,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  LOGOUT_USER,
} from "../_actions/types";
const userReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return { ...state, loading: true };
    case LOGIN_USER_SUCCESS:
      return { ...state, loading: false, user: action.user, error: "" };
    case LOGIN_USER_FAILED:
      return { ...state, loading: false, error: action.error, user: {} };
    case REGISTER_USER_REQUEST:
      return { ...state, loading: true };
    case REGISTER_USER_FAILED:
      return { ...state, loading: false, error: action.error };
    case LOGOUT_USER:
      return { ...state, user: {} };
    default:
      return state;
  }
};

export { userReducer };
