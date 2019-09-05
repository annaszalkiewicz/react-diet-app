import React, { Component } from "react";
import { connect } from "react-redux";

import { getMealPlan } from "../store/actions/userActions";
import MealHours from "./MealHours";

class MealPlan extends Component {
  componentDidMount = () => {
    this.props.getMealPlan();
  };

  render() {
    const { mealPlan } = this.props;
    return (
      <section className="mealPlan">
        <div className="mealPlan_container">
          <MealHours />

          {mealPlan.week.map(day => {
            return (
              <div className="mealPlan_day" key={day.day}>
                <div className="mealPlan_heading">Day {day.day}</div>
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
