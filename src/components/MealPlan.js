import React, { Component } from "react";
import { connect } from "react-redux";

import { getMealPlan } from "../store/actions/userActions";
import MealHours from "./MealHours";
import MealWeek from "./MealWeek";

class MealPlan extends Component {
  componentDidMount = () => {
    this.props.getMealPlan();
  };

  render() {
    return (
      <section className="mealPlan">
        <div className="mealPlan_container">
          <MealHours />
          <MealWeek />
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
