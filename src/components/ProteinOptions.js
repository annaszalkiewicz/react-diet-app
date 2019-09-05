import React, { Component } from 'react';
import vegetable from '../assets/img/vegetables.png';
import vagetableDisabled from '../assets/img/vegetables-disabled.png';
import dairy from '../assets/img/dairy.png';
import dairyDisabled from '../assets/img/dairy-disabled.png';
import beef from '../assets/img/beef.png';
import beefDisabled from '../assets/img/beef-disabled.png';
import chicken from '../assets/img/chicken.png';
import chickenDisabled from '../assets/img/chicken-disabled.png';
import fish from '../assets/img/fish.png';
import fishDisabled from '../assets/img/fish-disabled.png';


class ProteinOptions extends Component {
  render() {
    return (
      <section className="options">
        <h3 className="options_header">
          Select your protein options
        </h3>
        <div className="options_buttons">
          <button className="options_button">
            <img src={vegetable} alt="Vegetable option enabled" className="options_vegetable--active" />
            <img src={vagetableDisabled} alt="Vegetable option disabled" className="options_vegetable--inactive" />
          </button>
          <button className="options_button">
            <img src={dairy} alt="Dairy option enabled" className="options_vegetable--active" />
            <img src={dairyDisabled} alt="Dairy option disabled" className="options_vegetable--inactive" />
          </button>
          <button className="options_button">
            <img src={beef} alt="Beef option enabled" className="options_vegetable--active" />
            <img src={beefDisabled} alt="Beef option disabled" className="options_vegetable--inactive" />
          </button>
          <button className="options_button">
            <img src={fish} alt="Fish option enabled" className="options_vegetable--active" />
            <img src={fishDisabled} alt="Fish option disabled" className="options_vegetable--inactive" />
          </button>
          <button className="options_button">
            <img src={chicken} alt="Chicken option enabled" className="options_vegetable--active" />
            <img src={chickenDisabled} alt="Chicken option disabled" className="options_vegetable--inactive" />
          </button>
        </div>
      </section>
    )
  }
}

export default ProteinOptions;