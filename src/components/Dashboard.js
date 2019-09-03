import React, { Component } from "react";
import { connect } from "react-redux";

import Timeline from "./Timeline";
import Slider from "./Slider";
import MealPlan from "./MealPlan";

import { setPlanDuration, setCurrentWeek, getMealPlan } from '../store/actions/userActions';

class Dashboard extends Component {

  componentDidMount = () => {
    this.props.setPlanDuration();
    this.props.setCurrentWeek();
    this.props.getMealPlan();
  }

  render() {
    return (
      <div className="dashboard_container">
        <Timeline />
        <Slider />
        <MealPlan />
      </div>
    );
  }
  
};

const mapStateToProps = state => {
  return {
    weeks: state.userReducer.weeks,
    currentWeek: state.userReducer.currentWeek,
    mealPlan: state.userReducer.mealPlan
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setPlanDuration: () => dispatch(setPlanDuration()),
    setCurrentWeek: () => dispatch(setCurrentWeek()),
    getMealPlan: () => dispatch(getMealPlan())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
