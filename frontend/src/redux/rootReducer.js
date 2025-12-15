import { combineReducers } from "redux";
import contactReducer from "./reducer";

const rootReducer = combineReducers({
  contacts: contactReducer,
});

export default rootReducer;
