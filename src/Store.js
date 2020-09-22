import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { feedsReducer } from "./_reducers/feedsReducers";
import { userReducer } from "./_reducers/userReducers";

const middleware = [thunk];

const rootReducer = combineReducers({
  users: userReducer,
  feeds: feedsReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
