import {
  FETCH_FEEDS_REQUEST,
  FETCH_FEEDS_SUCCESS,
  FETCH_FEEDS_FAILED,
  FETCH_FEED_REQUEST,
  FETCH_FEED_SUCCESS,
  FETCH_FEED_FAILED,
  ADD_FEED,
} from "./types";
import Axios from "axios";

export const fetchFeeds = (user) => async (dispatch) => {
  dispatch({ type: FETCH_FEEDS_REQUEST });

  try {
    const { data } = await Axios.get("http://localhost:3000/feeds");

    dispatch({
      type: FETCH_FEEDS_SUCCESS,
      feeds: data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_FEEDS_FAILED,
      error: error.response.data.error,
    });
  }
};

export const addFeed = (feed) => async (dispatch) => {
  try {
    const { data } = await Axios.post("http://localhost:3000/feeds", feed);

    dispatch({
      type: ADD_FEED,
      feed: data,
    });
  } catch (error) {
    console.log(error.response.data.error);
  }
};

export const fetchFeed = (id) => async (dispatch) => {
  dispatch({ type: FETCH_FEED_REQUEST });

  try {
    const { data } = await Axios.get("http://localhost:3000/feeds/" + id);

    dispatch({
      type: FETCH_FEED_SUCCESS,
      feed: data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_FEED_FAILED,
      error: error.response.data.error,
    });
  }
};

export const deleteFeed = (id) => async (dispatch) => {
  try {
    await Axios.delete("http://localhost:3000/feeds/" + id);
    const { data } = await Axios.get("http://localhost:3000/feeds");
    dispatch({
      type: FETCH_FEEDS_SUCCESS,
      feeds: data,
    });
  } catch (error) {
    alert("An error occured : ", error.response.data.error);
  }
};
