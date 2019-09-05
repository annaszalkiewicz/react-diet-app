import React, { Component } from "react";
import { connect } from "react-redux";

import workout from "../assets/img/table-workout-icon.png";
import smile from "../assets/img/emoticon-smile.png";

class MealWeek extends Component {
  render() {
    const { mealPlan } = this.props;
    return (
      <React.Fragment>
        {mealPlan.week.map(day => {
          return (
            <div className="mealPlan_day" key={day.day}>
              <div className="mealPlan_heading">Day {day.day}</div>
              {day.free === true && (
                <div className="mealPlan_free">
                  <div className="free_item">
                    <h2>Guilt-free day</h2>
                  </div>
                  <div className="free_item">
                    <img src={smile} alt="Smile" />
                  </div>
                </div>
              )}
              <div className={"mealPlan_day--" + day.day + " mealPlan_meal"}>
                {day.meals[0]}
              </div>
              <div className={"mealPlan_day--" + day.day + " mealPlan_meal"}>
                {day.meals[1]}
              </div>
              <div className={"mealPlan_day--" + day.day + " mealPlan_meal"}>
                {day.meals[2]}
              </div>
              <div className={"mealPlan_day--" + day.day + " mealPlan_meal"}>
                {day.meals[3]}
              </div>
              <div className={"mealPlan_day--" + day.day + " mealPlan_meal"}>
                {day.meals[4]}
              </div>
              <div className="mealPlan_carb">
                {day.lowCarb && (
                  <div className="mealPlan_carb--low">low-carb</div>
                )}
                {!day.lowCarb && (
                  <div className="mealPlan_carb--low">high-carb</div>
                )}
              </div>
              <div className="mealPlan_workout">
                <div className="mealPlan_workout--icon">
                  <img src={workout} alt="Workout" />
                </div>
              </div>
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    mealPlan: state.userReducer.mealPlan
  };
};

export default connect(
  mapStateToProps,
  null
)(MealWeek);
