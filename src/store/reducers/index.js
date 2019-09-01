import { combineReducers } from 'redux';

import authReducer from './authReducer';
import uiReducer from './uiReducer';

const rootReducer = combineReducers({ authReducer, uiReducer });

export default rootReducer;