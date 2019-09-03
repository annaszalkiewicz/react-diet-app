import { combineReducers } from "redux";

import authReducer from "./authReducer";
import uiReducer from "./uiReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({ 
  authReducer, 
  uiReducer, 
  userReducer 
});

export default rootReducer;
