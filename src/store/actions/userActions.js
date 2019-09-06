import {
  SET_CURRENT_WEEK,
  SET_PLAN_DURATION,
  GET_MEAL_PLAN
} from "./actionTypes";

export const setCurrentWeek = () => {
  return {
    type: SET_CURRENT_WEEK
  };
};

export const setPlanDuration = () => {
  return {
    type: SET_PLAN_DURATION
  };
};

export const getMealPlan = () => {
  return {
    type: GET_MEAL_PLAN
  };
};
