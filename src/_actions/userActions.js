import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_FAILED,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  LOGOUT_USER,
} from "./types";
import Axios from "axios";

export const userSignUp = (user) => async (dispatch) => {
  dispatch({ type: REGISTER_USER_REQUEST });

  try {
    const { data } = await Axios.post("http://localhost:3000/users", user);

    dispatch(loginUser(data));
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAILED,
      error: error.response.data.error,
    });
  }
};

export const userLogin = (user) => async (dispatch) => {
  dispatch({ type: LOGIN_USER_REQUEST });
  const { email, password } = user;
  try {
    const { data } = await Axios.get(
      `http://localhost:3000/users?email=${email}&limit=1`
    );
    const userData = data[0];
    if (password === userData.password) {
      dispatch(loginUser(userData));
    } else {
      dispatch({
        type: LOGIN_USER_FAILED,
        error: "Invalid details...",
      });
    }
  } catch (error) {
    dispatch({
      type: LOGIN_USER_FAILED,
      error: error.response.data.message,
    });
  }
};
export const userLogout = (user) => async (dispatch) => {
  dispatch({
    type: LOGOUT_USER,
  });
};

const loginUser = (user) => ({
  type: LOGIN_USER_SUCCESS,
  user,
});
