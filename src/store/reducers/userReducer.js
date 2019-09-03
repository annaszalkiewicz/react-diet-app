import {
  SET_CURRENT_WEEK,
  SET_PLAN_DURATION,
  GET_MEAL_PLAN
} from "../actions/actionTypes";
import data from "../../data/db.json";

const initialState = {
  currentWeek: null,
  weeks: [],
  mealPlan: {}
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_WEEK:
      return {
        ...state,
        currentWeek: Math.floor(
          (Date.now() - Date.parse(data.users[0].program.startDate)) /
            604800000 +
            1
        )
      };

    case SET_PLAN_DURATION:
      return {
        ...state,
        weeks: [...Array(data.users[0].program.duration)].map((v, i) => {
          return i + 1;
        })
      };

    case GET_MEAL_PLAN:
      return {
        ...state,
        mealPlan: data.users[0].mealPlan
      };
    default:
      return state;
  }
};

export default userReducer;
