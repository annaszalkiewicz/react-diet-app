import { SET_CURRENT_WEEK } from '../actions/actionTypes';
import data from '../../data/db.json';

const initialState = {
  currentWeek: 1
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {

  case SET_CURRENT_WEEK:
    return { 
      ...state,
      currentWeek: Math.floor((Date.now() - Date.parse(data.users[0].program.startDate)) / 604800000 + 1)
    };

  default:
    return state
  }
};

export default userReducer;