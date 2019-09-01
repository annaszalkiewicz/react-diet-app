import { LOG_IN } from '../actions/actionTypes';

const initialState = {
  isLogin: false
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {

  case LOG_IN:
    return { 
      ...state,
      isLogin: true
    };

  default:
    return state
  }
};

export default authReducer;