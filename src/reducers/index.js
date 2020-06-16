import uiReducer from "./ui";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  ui: uiReducer,
  isLogged: loggedReducer,
});

export default allReducers;
