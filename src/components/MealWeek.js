import React, { Component } from "react";
import { connect } from "react-redux";

import workout from "../assets/img/table-workout-icon.png";
import workoutCheck from "../assets/img/workout-check.png";
import smile from "../assets/img/emoticon-smile.png";
import print from "../assets/img/print-icon.png";
import check from "../assets/img/check.png";

class MealWeek extends Component {
  state = {
    isToday: 65,
    workoutCompleted: false
  };

  printHandler = () => {
    window.print();
  };

  render() {
    const { mealPlan } = this.props;
    return (
      <div className="mealPlan_overflow">
        {mealPlan.week.map(day => {
          return (
            <div
              className={
                day.day === this.state.isToday
                  ? "mealPlan_day mealPlan_day--today"
                  : "mealPlan_day"
              }
              key={day.day}
            >
              <div
                className={
                  day.free === true
                    ? "mealPlan_heading mealPlan_heading--last"
                    : "mealPlan_heading"
                }
              >
                Day {day.day}
              </div>
              {day.free === true && (
                <React.Fragment>
                  <div className="mealPlan_free">
                    <div className="free_item">
                      <h2>Guilt-free day</h2>
                    </div>
                    <div className="free_item">
                      <img src={smile} alt="Smile" />
                    </div>
                  </div>
                  <button
                    className="mealPlan_print"
                    onClick={this.printHandler}
                  >
                    <img src={print} alt="Print page" />
                    <h3>Print</h3>
                  </button>
                </React.Fragment>
              )}
              <div
                role="button"
                className={
                  day.meals[0] === "Bod•ē Shake"
                    ? "mealPlan_day--" +
                      day.day +
                      " mealPlan_meal mealPlan_shake"
                    : "mealPlan_day--" + day.day + " mealPlan_meal"
                }
                style={{ display: day.free ? "none" : "flex" }}
              >
                {day.meals[0]}
                {day.mealsCompleted[0] === true && (
                  <img
                    src={check}
                    alt="Completed"
                    className="mealPlan_meal--completed"
                  />
                )}
              </div>
              <div
                role="button"
                className={"mealPlan_day--" + day.day + " mealPlan_meal"}
                style={{ display: day.free ? "none" : "flex" }}
              >
                {day.meals[1]}
                {day.mealsCompleted[1] === true && (
                  <img
                    src={check}
                    alt="Completed"
                    className="mealPlan_meal--completed"
                  />
                )}
              </div>
              <div
                role="button"
                className={
                  day.meals[2] === "Bod•ē Shake"
                    ? "mealPlan_day--" +
                      day.day +
                      " mealPlan_meal mealPlan_shake"
                    : "mealPlan_day--" + day.day + " mealPlan_meal"
                }
                style={{ display: day.free ? "none" : "flex" }}
              >
                {day.meals[2]}
                {day.mealsCompleted[2] === true && (
                  <img
                    src={check}
                    alt="Completed"
                    className="mealPlan_meal--completed"
                  />
                )}
              </div>
              <div
                role="button"
                className={"mealPlan_day--" + day.day + " mealPlan_meal"}
                style={{ display: day.free ? "none" : "flex" }}
              >
                {day.meals[3]}
                {day.mealsCompleted[3] === true && (
                  <img
                    src={check}
                    alt="Completed"
                    className="mealPlan_meal--completed"
                  />
                )}
              </div>
              <div
                role="button"
                className={"mealPlan_day--" + day.day + " mealPlan_meal"}
                style={{ display: day.free ? "none" : "flex" }}
              >
                {day.meals[4]}
                {day.mealsCompleted[4] === true && (
                  <img
                    src={check}
                    alt="Completed"
                    className="mealPlan_meal--completed"
                  />
                )}
              </div>
              <div
                className="mealPlan_carb"
                style={{ display: day.free ? "none" : "block" }}
              >
                {day.lowCarb && (
                  <div className="mealPlan_carb--low">low-carb</div>
                )}
                {!day.lowCarb && (
                  <div className="mealPlan_carb--low">high-carb</div>
                )}
              </div>
              <div
                className="mealPlan_workout"
                style={{ display: day.free ? "none" : "flex" }}
                onClick={this.onWorkOutCompleted}
              >
                <div className="mealPlan_workout--icon">
                  <img
                    src={day.workout ? workoutCheck : workout}
                    alt="Workout"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
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
