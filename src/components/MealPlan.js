import React, { Component } from "react";
import { connect } from "react-redux";

import { getMealPlan } from '../store/actions/userActions';

class MealPlan extends Component {

  componentDidMount = () => {
    this.props.getMealPlan();
    console.log(this.props.mealPlan);
  }

  render() {
    return (
      <section className="mealPlan">
        <div className="mealPlan_container">
          <div className="mealPlan_hours">
            {this.props.mealPlan.mealHours.map(hour => {
              return <div className="mealPlan_hour" key={hour}>{hour}</div>;
            })}
          </div>
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
