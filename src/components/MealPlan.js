import React, { Component } from "react";
import { connect } from "react-redux";

import { getMealPlan } from "../store/actions/userActions";

class MealPlan extends Component {
  componentDidMount = () => {
    this.props.getMealPlan();
  };

  render() {
    const { mealPlan } = this.props;
    return (
      <section className="mealPlan">
        <div className="mealPlan_container">
          <div className="mealPlan_hours">
            <div className="mealPlan_hours--empty"></div>
            {mealPlan.mealHours.map(hour => {
              return (
                <div
                  className={
                    new Date("1970-01-01T" + hour).getHours() >= 12
                      ? "mealPlan_hour--pm mealPlan_hour"
                      : "mealPlan_hour--am mealPlan_hour"
                  }
                  key={hour}
                >
                  {new Date("1970-01-01T" + hour).getHours() +
                    ":" +
                    new Date("1970-01-01T" + hour).getMinutes() +
                    "0"}
                </div>
              );
            })}
          </div>

          {mealPlan.week.map(day => {
            return (
              <div className="mealPlan_day"key={day.day}>
                <div className="mealPlan_heading">{day.day}</div>
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
                <div className={"mealPlan_day--" + day.day + " mealPlan_meal"}>
                  {day.meals[5]}
                </div>
                <div className="mealPlan_carb">
                  {day.lowCarb && (
                    <div className="mealPlan_carb--low">low-carb</div>
                  )}
                  {!day.lowCarb && (
                    <div className="mealPlan_carb--low">high-carb</div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    mealPlan: state.userReducer.mealPlan
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMealPlan: () => dispatch(getMealPlan())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MealPlan);
