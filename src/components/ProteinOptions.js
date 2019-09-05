import React, { Component } from "react";
import { connect } from "react-redux";

import { setProteinOptions } from "../store/actions/userActions";

import vegetable from "../assets/img/vegetables.png";
import vagetableDisabled from "../assets/img/vegetables-disabled.png";
import dairy from "../assets/img/dairy.png";
import dairyDisabled from "../assets/img/dairy-disabled.png";
import beef from "../assets/img/beef.png";
import beefDisabled from "../assets/img/beef-disabled.png";
import chicken from "../assets/img/chicken.png";
import chickenDisabled from "../assets/img/chicken-disabled.png";
import fish from "../assets/img/fish.png";
import fishDisabled from "../assets/img/fish-disabled.png";

class ProteinOptions extends Component {
  componentDidMount = () => {
    this.props.setProteinOptions();
  };

  clickHandler = e => {
    if (e.target.classList.contains("options_button")) {
    }
    return;
  };
  render() {
    const { mealPlan } = this.props;
    return (
      <section className="options">
        <h3 className="options_header">Select your protein options</h3>
        <div className="options_buttons" onClick={e => this.clickHandler(e)}>
          <button className="options_button">
            {mealPlan.proteinOptions.vegetables && (
              <img
                src={vegetable}
                alt="Vegetable option enabled"
                className="options_vegetable--active"
              />
            )}
            {!mealPlan.proteinOptions.vegetables && (
              <img
                src={vagetableDisabled}
                alt="Vegetable option disabled"
                className="options_vegetable--inactive"
              />
            )}
          </button>
          <button className="options_button">
            {mealPlan.proteinOptions.dairy && (
              <img
                src={dairy}
                alt="Dairy option enabled"
                className="options_vegetable--active"
              />
            )}
            {!mealPlan.proteinOptions.dairy && (
              <img
                src={dairyDisabled}
                alt="Dairy option disabled"
                className="options_vegetable--inactive"
              />
            )}
          </button>
          <button className="options_button">
            {mealPlan.proteinOptions.beef && (
              <img
                src={beef}
                alt="Beef option enabled"
                className="options_vegetable--active"
              />
            )}
            {!mealPlan.proteinOptions.beef && (
              <img
                src={beefDisabled}
                alt="Beef option disabled"
                className="options_vegetable--inactive"
              />
            )}
          </button>
          <button className="options_button">
            {mealPlan.proteinOptions.fish && (
              <img
                src={fish}
                alt="Fish option enabled"
                className="options_vegetable--active"
              />
            )}
            {!mealPlan.proteinOptions.fish && (
              <img
                src={fishDisabled}
                alt="Fish option disabled"
                className="options_vegetable--inactive"
              />
            )}
          </button>
          <button className="options_button">
            {mealPlan.proteinOptions.chicken && (
              <img
                src={chicken}
                alt="Chicken option enabled"
                className="options_vegetable--active"
              />
            )}
            {!mealPlan.proteinOptions.chicken && (
              <img
                src={chickenDisabled}
                alt="Chicken option disabled"
                className="options_vegetable--inactive"
              />
            )}
          </button>
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
    setProteinOptions: () => dispatch(setProteinOptions())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProteinOptions);
