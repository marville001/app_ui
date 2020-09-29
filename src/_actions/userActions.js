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
    localStorage.setItem("user", JSON.stringify(data));
    dispatch(loginUser(data));
  } catch (error) {
    localStorage.removeItem("user");
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
      localStorage.setItem("user", JSON.stringify(userData));
      dispatch(loginUser(userData));
    } else {
      localStorage.removeItem("user");
      dispatch({
        type: LOGIN_USER_FAILED,
        error: "Invalid details...",
      });
    }
  } catch (error) {
    localStorage.removeItem("user");
    dispatch({
      type: LOGIN_USER_FAILED,
      error: error.response.data.message,
    });
  }
};

export const getProfileFetch = () => (dispatch) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    try {
      dispatch(loginUser(user));
    } catch (error) {
      console.log(error);
    }
  }
};

export const userLogout = (user) => async (dispatch) => {
  localStorage.removeItem("user");
  dispatch({
    type: LOGOUT_USER,
  });
};

const loginUser = (user) => ({
  type: LOGIN_USER_SUCCESS,
  user,
});
