import { combineReducers } from "redux";
import badgesReducer from "./badgesReducer";
import ventasReducer from "./ventasReducer";

const rootReducer = combineReducers({ badgesReducer, ventasReducer });

export default rootReducer;
