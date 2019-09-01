import { IS_OPEN } from '../actions/actionTypes';

const initialState = {
  isNavOpen: false
}

const uiReducer = (state = initialState, action) => {
  switch (action.type) {

  case IS_OPEN:
    return { 
      ...state,
      isNavOpen: (!state.isNavOpen) ? true : false
    };

  default:
    return state
  }
};

export default uiReducer;