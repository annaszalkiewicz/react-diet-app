import React, { Component } from "react";

import data from "../data/db.json";
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
  state = {
    proteinOptions: {
      vegetables: data.users[0].proteinOptions.vegetables,
      dairy: data.users[0].proteinOptions.dairy,
      beef: data.users[0].proteinOptions.beef,
      fish: data.users[0].proteinOptions.fish,
      chicken: data.users[0].proteinOptions.chicken
    }
  };

  clickHandler = e => {
    if (e.target.classList.contains("button_icon--vegetables")) {
      this.setState(prevState => {
        return {
          proteinOptions: {
            ...prevState.proteinOptions,
            vegetables: !prevState.proteinOptions.vegetables
          }
        };
      });
    } else if (e.target.classList.contains("button_icon--dairy")) {
      this.setState(prevState => {
        return {
          proteinOptions: {
            ...prevState.proteinOptions,
            dairy: !prevState.proteinOptions.dairy
          }
        };
      });
    } else if (e.target.classList.contains("button_icon--beef")) {
      this.setState(prevState => {
        return {
          proteinOptions: {
            ...prevState.proteinOptions,
            beef: !prevState.proteinOptions.beef
          }
        };
      });
    } else if (e.target.classList.contains("button_icon--fish")) {
      this.setState(prevState => {
        return {
          proteinOptions: {
            ...prevState.proteinOptions,
            fish: !prevState.proteinOptions.fish
          }
        };
      });
    } else {
      this.setState(prevState => {
        return {
          proteinOptions: {
            ...prevState.proteinOptions,
            chicken: !prevState.proteinOptions.chicken
          }
        };
      });
    }
  };

  render() {
    const { proteinOptions } = this.state;
    return (
      <section className="options">
        <h3 className="options_header">Select your protein options</h3>
        <div className="options_buttons" onClick={e => this.clickHandler(e)}>
          <button className="options_button">
            {proteinOptions.vegetables && (
              <img
                src={vegetable}
                alt="Vegetable option enabled"
                className="button_icon--vegetables button_icon"
              />
            )}
            {!proteinOptions.vegetables && (
              <img
                src={vagetableDisabled}
                alt="Vegetable option disabled"
                className="button_icon--vegetables button_icon"
              />
            )}
          </button>
          <button className="options_button">
            {proteinOptions.dairy && (
              <img
                src={dairy}
                alt="Dairy option enabled"
                className="button_icon--dairy  button_icon"
              />
            )}
            {!proteinOptions.dairy && (
              <img
                src={dairyDisabled}
                alt="Dairy option disabled"
                className="button_icon--dairy button_icon"
              />
            )}
          </button>
          <button className="options_button">
            {proteinOptions.beef && (
              <img
                src={beef}
                alt="Beef option enabled"
                className="button_icon--beef button_icon"
              />
            )}
            {!proteinOptions.beef && (
              <img
                src={beefDisabled}
                alt="Beef option disabled"
                className="button_icon--beef button_icon"
              />
            )}
          </button>
          <button className="options_button">
            {proteinOptions.fish && (
              <img
                src={fish}
                alt="Fish option enabled"
                className="button_icon--fish button_icon"
              />
            )}
            {!proteinOptions.fish && (
              <img
                src={fishDisabled}
                alt="Fish option disabled"
                className="button_icon--fish button_icon"
              />
            )}
          </button>
          <button className="options_button">
            {proteinOptions.chicken && (
              <img
                src={chicken}
                alt="Chicken option enabled"
                className="button_icon--chicken button_icon"
              />
            )}
            {!proteinOptions.chicken && (
              <img
                src={chickenDisabled}
                alt="Chicken option disabled"
                className="button_icon--chicken button_icon"
              />
            )}
          </button>
        </div>
      </section>
    );
  }
}

export default ProteinOptions;
