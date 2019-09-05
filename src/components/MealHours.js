import React, { Component } from "react";
import { connect } from "react-redux";
import { Icon } from "@mdi/react";
import { mdiMenuRight } from "@mdi/js";

class MealHours extends Component {
  render() {
    return (
      <div className="mealPlan_hours">
        <div className="mealPlan_hours--empty"></div>
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
        <div className="mealPlan_hours--small"></div>
        <div className="mealPlan_hours--small mealPlan_hours--workout">
          Workout
          <Icon path={mdiMenuRight} size={0.8} color="#828282" className="mealPlan_hours--icon" />
        </div>
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
)(MealHours);
