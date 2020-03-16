import { combineReducers } from "redux";
import TrendingReducer from './TrendingReducer';
import LatestReducer from './LatestReducer';
import counter from "./counter";

const rootReducer = combineReducers({
  counter,
  LatestReducer,
  TrendingReducer
});

export default rootReducer;
