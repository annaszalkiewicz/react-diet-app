import { SET_CURRENT_WEEK, SET_PLAN_DURATION } from './actionTypes';

export const setCurrentWeek = () => {
  return {
    type: SET_CURRENT_WEEK
  }
}

export const setPlanDuration = () => {
  return {
    type: SET_PLAN_DURATION
  }
}