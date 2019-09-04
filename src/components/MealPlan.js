import React, { Component } from "react";
import { connect } from "react-redux";

import { getMealPlan } from "../store/actions/userActions";

class MealPlan extends Component {
  componentDidMount = () => {
    this.props.getMealPlan();
    console.log(this.props.mealPlan);
  };

  render() {
    return (
      <section className="mealPlan">
        <div className="mealPlan_container">
          <div className="mealPlan_hours">
            {this.props.mealPlan.mealHours.map(hour => {
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
