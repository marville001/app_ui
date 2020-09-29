import {
  FETCH_FEEDS_REQUEST,
  FETCH_FEEDS_SUCCESS,
  FETCH_FEEDS_FAILED,
  FETCH_FEED_REQUEST,
  FETCH_FEED_SUCCESS,
  FETCH_FEED_FAILED,
  ADD_FEED,
} from "../_actions/types";
const feedsReducer = (state = { feeds: [], feed: {} }, action) => {
  switch (action.type) {
    case ADD_FEED:
      return {
        ...state,
        feedsloading: false,
        feeds: [...state.feeds, action.feed],
      };
    case FETCH_FEEDS_REQUEST:
      return { ...state, feedsloading: true };
    case FETCH_FEEDS_SUCCESS:
      return {
        ...state,
        feedsloading: false,
        feeds: action.feeds,
        feedserror: "",
      };
    case FETCH_FEEDS_FAILED:
      return {
        ...state,
        feedsloading: false,
        feedserror: action.error,
        feeds: {},
      };
    case FETCH_FEED_REQUEST:
      return { ...state, feedloading: true };
    case FETCH_FEED_SUCCESS:
      return { ...state, feedloading: false, feed: action.feed, feederror: "" };
    case FETCH_FEED_FAILED:
      return {
        ...state,
        feedloading: false,
        feederror: action.error,
        feeds: {},
      };
    default:
      return state;
  }
};

export { feedsReducer };
