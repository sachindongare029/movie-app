import movieReducer from "./movieReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ movieReducer });

export default rootReducer;
