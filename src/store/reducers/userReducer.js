import { SET_CURRENT_WEEK, SET_PLAN_DURATION } from '../actions/actionTypes';
import data from '../../data/db.json';

const initialState = {
  currentWeek: null,
  weeks: []
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {

  case SET_CURRENT_WEEK:
    return { 
      ...state,
      currentWeek: Math.floor((Date.now() - Date.parse(data.users[0].program.startDate)) / 604800000 + 1)
    };

  case SET_PLAN_DURATION:
    return {
      ...state,
      weeks: [...Array(data.users[0].program.duration)].map((v, i) => {
        return i+1;
      })
      }

  default:
    return state
  }
};

export default userReducer;