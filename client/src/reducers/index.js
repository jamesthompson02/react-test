import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import displayReducer from "./displayReducer";

const allReducers = combineReducers({
  todo: todoReducer,
  modalsDisplay: displayReducer,
});

export default allReducers;